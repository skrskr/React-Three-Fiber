import { Canvas } from "@react-three/fiber";

import * as THREE from "three";
import Polyhedron from "./Polyhedron";
import { OrbitControls, Stats } from "@react-three/drei";
import { Leva, useControls } from "leva";
import { useMemo } from "react";

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.78),
    new THREE.DodecahedronGeometry(0.78),
  ];

  // const color = useControls({
  //   value: "#000000",
  // });

  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: 'lime' },
    };
  }, []);

  const pA = useControls("Polyhedron A", options);
  const pB = useControls("Polyhedron B", options);

  return (
    <>
    <Canvas camera={{ position: [0, 0, 2] }}>
      {/* <color attach={"background"} args={[color.value]} /> */}
      <Polyhedron 
        position={[-1, 1, 0]} 
        rotation={[pA.x, pA.y, pA.z]}
        visible={pA.visible}
        color={pA.color}
        polyhedron={polyhedron} 
      />
      <Polyhedron 
        position={[1, 1, 0]} 
        rotation={[pB.x, pB.y, pB.z]}
        visible={pB.visible}
        color={pB.color}
        polyhedron={polyhedron} 
      />
     
      <OrbitControls />
      <axesHelper args={[5]}/>
      <gridHelper 
        args={[20, 20, 0xff0000, 'teal']}
        // rotation-x={Math.PI / 4}
        // rotation-y={Math.PI / 4}
      />
      <Stats />

    </Canvas>
      <Leva collapsed />
    </>
  );
}
