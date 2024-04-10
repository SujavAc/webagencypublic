"use client";
import AdminRoute from "@/database/authentication/adminRoute";
import DashboardNavigation from "./common/navigation";
import TabsComponent from "@/components/Common/Tab";
import SiginUpForm from "@/components/Forms/FormLists/signUp";
import StackLayout from "@/components/Layout/Stack";
import useScreenSize from "@/utils/mediaQuery";
import BlogForm from "./common/forms/blog";
import ProjectForm from "./common/forms/project";
import { useState } from "react";
import NavigationForm from "@/components/Forms/FormLists/NavigationForm";
import HeroBannerForm from "@/components/Forms/FormLists/HeroBannerForm";
import AboutPageForm from "@/components/Forms/FormLists/AboutPageForm";
import ContactDetailForm from "@/components/Forms/FormLists/ContactDetailForm";
import FeatureForm from "@/components/Forms/FormLists/FeatureForm";
import ImageUploadForm from "@/components/Forms/FormLists/ImageUploadForm";
import ContactUsForm from "@/components/Forms/FormLists/ContactUsForm";
import ContactUs from "./contactUs";
import HeroBanner from "./components/heroBanner";
import SectionTitle from "./components/sectionTitle";
import Feature from "./components/feature";
import PageForm from "@/components/Forms/FormLists/PageForm";
import Pages from "./pages";
import FormComponent from "@/components/Forms/FormLists/addComponentForm";

const Dashboard = () => {
  const size = useScreenSize();

  return (
    <AdminRoute>
      <StackLayout
        noOfItems={[
          <DashboardNavigation key="navigation" />,
          <TabsComponent
            defaultTab="1"
            tab={[
              { label: "Contact Details", value: "1" },
              { label: "Blog Post", value: "2" },
              { label: "Projects", value: "3" },
              { label: "Form Componenet", value: "4" },
              // { label: "Hero Banner", value: "5" },
              { label: "About us", value: "6" },
              // { label: "Add Features", value: "7" },
              // { label: "Upload Image", value: "8" },
              { label: "Create Account", value: "9" },
              { label: "Contact Us form", value: "10" },
              { label: "Components", value: "11" },
              { label: "Page", value: "12" },
            ]}
            tabsProps={{
              orientation: size === "sm" ? "horizontal" : "vertical",
              variant: "scrollable",
              "aria-label": "Admin dashboard tabs",
            }}
            tabPanel={[
              {
                value: "1",
                children: <ContactDetailForm title="Contact details form" />,
              },
              {
                value: "2",
                children: (
                  <TabsComponent
                    defaultTab="1"
                    tab={[
                      { label: "Add Blog", value: "1" },
                      { label: "Update Blog", value: "2" },
                    ]}
                    tabsProps={{
                      orientation: "horizontal",
                      variant: "scrollable",
                      "aria-label": "Admin dashboard tabs",
                    }}
                    tabPanel={[
                      {
                        value: "1",
                        children: <BlogForm title="Add your Blog" />,
                      },
                      {
                        value: "2",
                        children: (
                          <BlogForm
                            title="Update your Blog"
                            defaultValues={{
                              blogTitle: "Test Blog",
                              description: "test description",
                              tag: "test tag",
                              image: "",
                            }}
                          />
                        ),
                      },
                    ]}
                    tabComponentName="adminDashboard"
                  />
                ),
              },
              {
                value: "3",
                children: <ProjectForm title="Add your project here." />,
              },
              {
                value: "4",
                children: <FormComponent />,
              },
              // {
              //   value: "5",
              //   children: <HeroBannerForm title="Add hero banner" />,
              // },
              {
                value: "6",
                children: <AboutPageForm title="About page form" />,
              },
              // { value: "7", children: <FeatureForm title="Add features" /> },
              // {
              //   value: "8",
              //   children: <ImageUploadForm title="Image Upload Portal" />,
              // },
              {
                value: "9",
                children: (
                  <SiginUpForm title="Please create an account for your members" />
                ),
              },
              {
                value: "10",
                children: <ContactUs />,
              },
              {
                value: "11",
                children: (
                  <TabsComponent
                    defaultTab="111"
                    tab={[
                      { label: "Navigation Form", value: "111" },
                      { label: "Hero Banner", value: "112" },
                      { label: "Add Features", value: "113" },
                      { label: "Section Title", value: "114" },
                    ]}
                    tabsProps={{
                      orientation: "horizontal",
                      variant: "scrollable",
                      "aria-label": "Component dashboard tabs",
                    }}
                    tabPanel={[
                      {
                        value: "111",
                        children: <NavigationForm title="Add Navbar data" />,
                      },
                      {
                        value: "112",
                        children: <HeroBanner />,
                        // children: <HeroBannerForm title="" />,
                      },
                      {
                        value: "113",
                        children: <Feature />,
                      },
                      {
                        value: "114",
                        children: <SectionTitle />,
                      },
                    ]}
                    tabComponentName="adminDashboard"
                  />
                ),
              },
              {
                value: "12",
                children: (
                  // <PageForm
                  //   title="Page Form"
                  //   onSubmit={(data) => console.log(data)}
                  // />
                  <Pages />
                ),
              },
            ]}
            tabComponentName="adminDashboard"
            key="adminDashboard"
          />,
          <StackLayout
            noOfItems={
              [
                // <FormBuilder
                //   key="builder"
                //   getFormData={(data) => setFormData(data)}
                // />,
                // <FormRender formData={formData} key="forms" />,
                // <FormBuilderArray
                //   getFormData={getFormData}
                //   key="formsBuildArray"
                // />,
              ]
            }
            stackProps={{
              direction: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              spacing: 3,
              sx: { width: "100%" },
            }}
            key="builder-renderer"
          />,
        ]}
        stackProps={{
          direction: "column",
          spacing: 3,
          sx: { width: "100%" },
        }}
      />
      {/* <UseFieldArrayUnregister
        fieldNames={appendJson}
        formJsonData={formJsonData}
        control={control}
      /> */}
    </AdminRoute>
  );
};
export default Dashboard;
