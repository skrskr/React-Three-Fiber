import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

export default function Box(props) {
  const ref = useRef();

  // const [hover, setHover] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);

  // it will be regenerated every time component state changes
  // const geometry = new THREE.BoxGeometry();
  // it will reuse the same geometry object
  // const geometry = useMemo(() => new THREE.BoxGeometry(), []);
  const geometry = useMemo(() => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.7)], []);

  useEffect(() => {
    console.log(ref.current.geometry.uuid)
  });


  // ref is undefined since component is not rendered yet
  // console.log(ref);

  // useEffect(() => {
  // ref is mesh object because useEffect is called after component is rendered
  //   console.log(ref);
  // }, []);


  // useFrame((state, delta) => {
  useFrame((_, delta) => {

      ref.current.rotation.x += delta * rotate;
      ref.current.rotation.y += delta * 0.5 * rotate;
      //   ref.current.position.y = Math.sin(state.clock.getElapsedTime()) /2

  });

  return (
    <mesh
      {...props}
      ref={ref}
      // scale={hover ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      // onPointerUp={(e) => console.log("on pointer up" + e.object.name)}
      // onPointerDown={() => setRotate(!rotate)}
      onPointerDown={() => setCount((count + 1) % 2)}
      //   onPointerDown={(e) => console.log("on pointer down" + e.object.name)}
      // onPointerOver={() => setHover(true)}
      // onPointerOut={() => setHover(false)}
      // onUpdate={(e) => console.log(e)}
      geometry={geometry[count]}
    >
      {/* <boxGeometry /> */}

      <meshBasicMaterial color={ 0x00ff00} wireframe />
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
