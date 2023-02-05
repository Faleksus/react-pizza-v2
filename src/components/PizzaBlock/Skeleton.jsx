import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="71" y="289" rx="0" ry="0" width="0" height="1" /> 
    <rect x="123" y="347" rx="0" ry="0" width="1" height="1" /> 
    <rect x="0" y="280" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="394" rx="10" ry="10" width="95" height="30" /> 
    <rect x="130" y="385" rx="25" ry="25" width="150" height="45" /> 
    <circle cx="135" cy="110" r="110" /> 
    <rect x="10" y="245" rx="10" ry="10" width="260" height="20" />
  </ContentLoader>
)

export default Skeleton

