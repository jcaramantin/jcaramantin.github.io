import { effect } from '@chakra-ui/react';
import { GLTLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

const draco = new DRACOLoader();
draco.setDecoderConfig({ type: 'js' });
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

export function loadGLTFModel(
    scene,
    glbPath,
    options={ receivedShadow:true , castShadow: true}
){
    const { receivedShadow, castShadow} = options;
    return new Promise((resolve,reject) => {

        const loader =  new GLTFLoader();
        loader.setDRACOLoader( draco );
        
        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene;
                obj.name = 'pfpmodel';
                obj.position.x = 0;
                obj.position.y = 0;
                obj.receivedShadow = receivedShadow;
                obj.castShadow = castShadow;
                scene.add(obj);

                obj.traverse(function(child){
                    if(child.isMesh)
                    {
                        child.castShadow=castShadow;
                        child.receivedShadow=receivedShadow;
                    }
                });
                resolve(obj);
            },
            undefined,
            function(error){
                reject(error);
            }
        )
    })
}