import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

import { Shirt } from './Shirt'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'
import { Tshirt } from './Tshirt'
import { useSnapshot } from 'valtio'
import state from '../store'


const CanvasModel = () => {
    const snap = useSnapshot(state)

    const generateModel = () => {
        switch (snap.model) {
            case 'tshirt':
                return <Shirt key="tshirt" />
            case 'poloShirt':
                return <Tshirt key="poloShirt" />
            default:
                return null;
        }
    }
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 0], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            className='w-full max-w-full h-full transition-all ease-in'
            position={[0, 0, 0]}
        >
            <Backdrop />
            <ambientLight position={[0, 0, 5]} intensity={0.5} />
            <directionalLight castShadow position={[0, 0, 5]} intensity={0.7} />
            <Environment preset="city" />
            <CameraRig rotateWithClick={true}>

                {generateModel()}
            </CameraRig>
        </Canvas >
    )
}

export default CanvasModel