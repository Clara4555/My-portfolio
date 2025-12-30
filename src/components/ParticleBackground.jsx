import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Particles() {
  const points = useRef()
  const count = 3000

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count * 3; i += 3) {
      // Positions
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 10

      // Colors - gradient from blue to purple
      colors[i] = Math.random() * 0.2 + 0.2 // R
      colors[i + 1] = Math.random() * 0.3 + 0.4 // G
      colors[i + 2] = Math.random() * 0.5 + 0.5 // B
    }
    return [positions, colors]
  }, [count])

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x += delta * 0.05
      points.current.rotation.y += delta * 0.03
      points.current.rotation.z += delta * 0.02
    }
  })

  return (
    <Points ref={points} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        className="w-full h-full"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        camera={{ position: [0, 0, 1] }}
      >
        <Particles />
      </Canvas>
    </div>
  )
}

export default ParticleBackground