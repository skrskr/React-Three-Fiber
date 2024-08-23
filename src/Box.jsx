import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function Box(props) {
    const ref = useRef();
    // ref is undefined since component is not rendered yet
    // console.log(ref);
    
    // useEffect(() => {
    // ref is mesh object because useEffect is called after component is rendered
    //   console.log(ref);
    // }, []);

    // useFrame((state, delta) => {
    useFrame((_, delta) => {
      ref.current.rotation.x += delta
      ref.current.rotation.y += delta * .5
    //   ref.current.position.y = Math.sin(state.clock.getElapsedTime()) /2
    })

  return (
    <mesh {...props} ref={ref}
        onPointerUp={(e) => console.log("on pointer up" + e.object.name)}
        onPointerDown={(e) => console.log("on pointer down" + e.object.name)}
        onPointerHover={(e) => console.log("on pointer hover" + e.object.name)}
        onPointerOut={(e) => console.log("on pointer out" + e.object.name)}
        onUpdate={(e) => console.log(e)}
    >
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
