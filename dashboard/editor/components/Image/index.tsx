import Image, {ImageProps} from 'next/image'
 
export default function ImageComponent(props: ImageProps) {
  return (
    <Image
      {...props}
    />
  )
}