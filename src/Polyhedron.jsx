import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export default function Polyhedron({position, polyhedron}) {
  const ref = useRef();

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(ref.current.geometry.uuid)
  });


  useFrame((_, delta) => {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerDown={() => setCount((count + 1) % 3)}
      geometry={polyhedron[count]}
    >
      <meshBasicMaterial color={ 0x00ff00} wireframe />
    </mesh>
  );
}
