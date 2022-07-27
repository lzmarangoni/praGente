// @ts-ignore
import * as THREE from "three"; //@ts-ignore
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";

const setParticles = (scene: any) : Array<any> => {
    let objects_margin = 13;

    let waveObjects = [];
    const loader = new THREE.TextureLoader();
    let particleTexture = loader.load('./wave_ball.png');
    let spriteMaterial = new THREE.SpriteMaterial({
        map: particleTexture,
        transparent: true,
        opacity: 1,
        color: 0xffffff
    });
    for (let x = 0; x < 100 ; x++) {
        for (let y = 0; y < 100 ; y++) { // Sprite creation
            var mesh = new THREE.Sprite(spriteMaterial);
            mesh.scale.set(1, 1, 1);                 // scale
            mesh.position.x = (x - 40) * objects_margin;    // POSITION X
            mesh.position.y = 3.5;
            mesh.position.z = (y * objects_margin) - 300;    //POSITION Y
            scene.add(mesh);
            waveObjects.push(mesh);
        }
    }
    return waveObjects;
}

const setCanvasStyle = (renderer: any) => {
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.opacity = 0.3;
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = 0;
    renderer.domElement.style.left = 0;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100vh";
    renderer.domElement.style.zIndex = 0;
}

const setObjectMaterial = (o: any) => {
    o.material.color = 0x000000
    o.flatShading = false;
    o.material.metalness = 0.9
    o.material.roughness = 0.01
    o.material.flatShading = false
}

export const brain3DObject = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    let object: any;
    let clock = new THREE.Clock();

    setCanvasStyle(renderer);

    let waveObjects = setParticles(scene);

    function animate() {
        let delta = clock.getDelta();
        let elapsed = clock.elapsedTime;
        object.scene.rotation.z -= 0.004;

        let waveSpeed = 1.8;
        let waveWidth = 200;
        let waveHeight = 7;
        for(let i = 0 ; i < waveObjects.length ; i++) {
            waveObjects[i].position.y =
                (Math.cos( (elapsed + (waveObjects[i].position.x / waveWidth) +
                    (waveObjects[i].position.z /waveWidth) ) * waveSpeed ) * waveHeight) - 30;
        }

        renderer.render( scene, camera );

        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    new GLTFLoader().load("/brainglb.glb", (obj: any) => {
        scene.background = "transparent"
        object = obj;
        object.scene.rotation.z = Math.PI / 2;
        object.scene.rotation.x = Math.PI / 2;
        object.scene.rotation.y = -Math.PI;
        object.scene.traverse((o: any) => {
            if (o.isMesh) {
                setObjectMaterial(o)
            }
        })
        scene.add(object.scene);
        animate();

    }, (xhr: { loaded: number, total: number }) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, (e: any) => {
        console.log("Error ocurred " + e)
    });

    let light = new THREE.PointLight(0xffffff, 100, 600, 3);
    light.position.set(300, 200, 150);
    scene.add(light);

    camera.position.y = 18
    camera.position.z = 93;
    camera.position.x = -70;

    document.body.appendChild(renderer.domElement);
}
