import { Canvas } from "@react-three/fiber";

import * as THREE from "three";
import Polyhedron from "./Polyhedron";
import { OrbitControls, Stats } from "@react-three/drei";

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.78),
    new THREE.DodecahedronGeometry(0.78),
  ];

  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
}
