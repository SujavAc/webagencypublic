"use client";
import ComponentMap from "./index";
import { connect } from "react-redux";
import { getSingleComponentData, queryComponentData } from "@/store/action/component/componentAction";
import { useAppSelector } from "@/store/hook";
import { useCallback, useEffect } from "react";
import { WhereCondition } from "@/types/firebase/where";

const ComponentRenderer = (props) => {
  const { components, id, pageName, dateAdded, getSingleComponentData, queryComponentData } = props;
  const componentData = useAppSelector(
    (state) => state.component.componentData,
  );
  console.log(componentData);
  const isDataExist = useCallback(
    (idValue) =>
      componentData?.filter((data) => data?.id === idValue)?.length > 0,
    [componentData],
  );

  const mapComponent = useCallback(
    (data) => {
      const { componentName, id } = data;
      if (id && componentName) {
        const Component = ComponentMap[componentName];
        const data = componentData?.filter((data) => data?.id === id)[0];
        return (
          <section id={componentName} className="pt-16 md:pt-20 lg:pt-28" key={id}>
            <Component {...data} />
          </section>
        );
      }
      // get data from database
    },
    [componentData],
  );

  const mapComponentData = useCallback(() => {
    components?.forEach((element) => {
      if (element?.id && element?.componentName && !isDataExist(element?.id)) {
        console.log("mapComponentData");
        getSingleComponentData(
          `components/componentLists/${element?.componentName}`,
          element?.id,
        );
        // queryComponentData('pages', 5, {key: "components", filterOperation: 'array-contains', value: {componentName:"sectionTitle", id: "ZGbz8KEvDvZvcrB1fWpp"}})
      }
    });
  }, [components, isDataExist, getSingleComponentData]);

  useEffect(() => {
    mapComponentData();
  }, []);

  if (components && components?.length < 1) {
    return;
  }
  return <>{components?.map((component) => mapComponent(component))}</>;
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getSingleComponentData: (dbCollection: string, id: string) =>
      dispatch(getSingleComponentData(dbCollection, id)),
    queryComponentData: (dbCollection: string, limit: string, whereCondition: WhereCondition) =>
      dispatch(queryComponentData(dbCollection, limit, whereCondition)),
  };
};
export default connect(null, mapDispatchToProps)(ComponentRenderer);
