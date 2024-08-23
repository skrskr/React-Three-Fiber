import { useEffect, useRef } from "react";

export default function Box(props) {
    // ref is undefined since component is not rendered yet
    const ref = useRef();
    console.log(ref);
    
    useEffect(() => {
    // ref is mesh object because useEffect is called after component is rendered
      console.log(ref);
    }, []);

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}

// export default function Box(props) {
//   return (
//     <mesh position={props.position} name={props.name}>
//       <boxGeometry />
//       <meshBasicMaterial color={0x00ff00} wireframe={props.wireframe} />
//     </mesh>
//   );
// }

// export default function Box({ position, name, wireframe }) {
//   return (
//     <mesh position={position} name={name}>
//       <boxGeometry />
//       <meshBasicMaterial color={0x00ff00} wireframe={wireframe} />
//     </mesh>
//   );
// }
