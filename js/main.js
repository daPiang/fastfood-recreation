const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCSoftShadowMap;
document.body.appendChild( renderer.domElement );


//Lights
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const dir_light = new THREE.DirectionalLight(0xffffff, 0.5);
dir_light.position.set(-48.4,22,10);
dir_light.target.position.set(0,0,0);
dir_light.castShadow = true;
scene.add(dir_light);


//Materials
const floor_mat = new THREE.MeshLambertMaterial({color:0x4f4f4f});
    floor_mat.map = THREE.ImageUtils.loadTexture('textures/tiles.jpg');

const wall_mat = new THREE.MeshLambertMaterial({color:0xe1a900});
    wall_mat.map = THREE.ImageUtils.loadTexture('textures/wall.jpg');

const wall_mat2 = new THREE.MeshLambertMaterial({color:0x2e2e2e});
const counter_mat = new THREE.MeshLambertMaterial({color:0xfffce3});
const table_mat = new THREE.MeshLambertMaterial({color:0xdfdfdf});
const black_steel = new THREE.MeshLambertMaterial({color:0x171717});
const yellow_seat = new THREE.MeshLambertMaterial({color:0xe1a900});
const black_seat = new THREE.MeshLambertMaterial({color:0x1a1919});

const sign_mat = new THREE.MeshLambertMaterial();
    sign_mat.map = THREE.ImageUtils.loadTexture('textures/sign.jpg');

const glass = new THREE.MeshLambertMaterial({color: 0x03dbfc,transparent: true,opacity: 0.5});

const menu_mat = new THREE.MeshLambertMaterial();
    menu_mat.map = THREE.ImageUtils.loadTexture('textures/menu.jpg');

const reg_mat = new THREE.MeshLambertMaterial({color: 0xaeaeae});
const m_door_mat = new THREE.MeshLambertMaterial({color:0x82baf9});
const f_door_mat = new THREE.MeshLambertMaterial({color:0xdb8cb5});
const carpet_mat = new THREE.MeshLambertMaterial({color:0xd00000});

//Floor
const floor_geo = new THREE.BoxGeometry(100,1,100);
const floor = new THREE.Mesh(floor_geo, floor_mat);
scene.add(floor);

//Left Wall
const wall_geo = new THREE.BoxGeometry(1,40,100);

const wall1 = new THREE.Mesh(wall_geo, wall_mat);
wall1.position.set(-50,20,0);
scene.add(wall1);

//Right Wall
const wall_geo2 = new THREE.BoxGeometry(100,40,1);

const wall2 = new THREE.Mesh(wall_geo2, wall_mat2);
wall2.position.set(0,20,-50);
scene.add(wall2);

//Wall Sign
const sign_geo = new THREE.BoxGeometry(1, 20, 40);

const sign = new THREE.Mesh(sign_geo, sign_mat);
sign.position.set(-48.4,22,10);
scene.add(sign);

//Counter
const counter_geo = new THREE.BoxGeometry(80, 6, 6);

const counter = new THREE.Mesh(counter_geo, wall_mat2);
counter.position.set(-9.5,3.5,-35);
scene.add(counter);

//Counter Top
const counter_top_geo = new THREE.BoxGeometry(80, 1, 8);

const counter_top = new THREE.Mesh(counter_top_geo, black_steel);
counter_top.position.set(-9.5,7,-34);
scene.add(counter_top);

//Counter Group
const g_counter = new THREE.Group();
g_counter.add(counter_top);
g_counter.add(counter);

g_counter.position.set(-13.5,0,14.5);
g_counter.scale.set(0.825,1.4,1.4);
scene.add(g_counter);

//Wide Table Set
//Stem
const w_tbl_stem_geo = new THREE.BoxGeometry(0.5,3,0.5);

const w_tbl_stem = new THREE.Mesh(w_tbl_stem_geo, black_steel);
w_tbl_stem.position.set(0,2,4);

const stem2 = w_tbl_stem.clone();
stem2.position.set(0,2,-4);

//Stem Base
const stem_base_geo = new THREE.BoxGeometry(3,0.5,0.5);
const stem_base = new THREE.Mesh(stem_base_geo, black_steel);
stem_base.position.set(0,0.5,4);

const stem_base2 = stem_base.clone();
stem_base2.position.set(0,0.5,-4);

//Top
const w_tabl_top_geo = new THREE.BoxGeometry(5,1,10);

const w_tbl_top = new THREE.Mesh(w_tabl_top_geo, table_mat);
w_tbl_top.position.set(0,4,0);

//Stool
const stool_geo = new THREE.CylinderGeometry(1,1,2,30);

const stool = new THREE.Mesh(stool_geo, yellow_seat);
stool.position.set(4,1.5,3);

const stool2 = new THREE.Mesh(stool_geo, black_seat);
stool2.position.set(4,1.5,-3);

const stool3 = stool2.clone();
stool3.position.set(-4,1.5,3);

const stool4 = stool.clone();
stool4.position.set(-4,1.5,-3);

//Wide Table Set Group
const group1 = new THREE.Group();
group1.add(w_tbl_stem);
group1.add(stem2);
group1.add(stem_base);
group1.add(stem_base2);
group1.add(w_tbl_top);
group1.add(stool);
group1.add(stool2);
group1.add(stool3);
group1.add(stool4);

group1.position.set(-20,0,10);
group1.scale.set(1.5,1.5,1.5);

const group2 = group1.clone();
group2.position.set(-20,0,35);

const group3 = group1.clone();
group3.position.set(0,0,35);

const group4 = group1.clone();
group4.position.set(0,0,10);

const group5 = group1.clone();
group5.position.set(20,0,10);

const group6 = group1.clone();
group6.position.set(20,0,35);

//Table Group
const tables = new THREE.Group();
tables.add(group1);
tables.add(group2);
tables.add(group3);
tables.add(group4);
tables.add(group5);
tables.add(group6);

tables.position.set(18,0,0);
scene.add(tables);

//Entrance
//Glass
const door_geo = new THREE.BoxGeometry(10,18,1);
const door = new THREE.Mesh(door_geo, glass);
door.position.set(-18.5,9,49.4);

const door2 = door.clone();
door2.position.set(-28.5,9,49.4);

//Door Frame
const frame_geo = new THREE.BoxGeometry(1,19,1);
const frame = new THREE.Mesh(frame_geo, black_steel);
frame.position.set(-13,9.3,49.4);

const frame2 = frame.clone();
frame2.position.set(-34,9.3,49.4);

const top_frame_geo = new THREE.BoxGeometry(21,1,1);
const top_frame = new THREE.Mesh(top_frame_geo, black_steel);
top_frame.position.set(-24,18.3,49.4);

const handle_geo = new THREE.BoxGeometry(1,2,1.5);
const handle = new THREE.Mesh(handle_geo, black_steel);
handle.position.set(-21.5,9,49);

const handle2 = handle.clone();
handle2.position.set(-25,9,50);

const open_door = new THREE.Group();
open_door.add(door);
open_door.add(handle);
open_door.position.set(36,0,61);
open_door.rotation.set(0,-1.55,0);

const g_door = new THREE.Group();
g_door.add(open_door);
g_door.add(handle2);
g_door.add(top_frame);
g_door.add(frame2);
g_door.add(frame);
g_door.add(door2);

g_door.position.set(-6,0,0);
scene.add(g_door);

//Menu
const menu_box_geo = new THREE.BoxGeometry(30,15,10);
const menu_box = new THREE.Mesh(menu_box_geo, black_steel);
menu_box.position.set(-34.5,32.6,-44.4);

const menu_geo = new THREE.BoxGeometry(28,13,0);
const menu = new THREE.Mesh(menu_geo, menu_mat);
menu.position.set(-34.5,32.6,-39.3);

const g_menu = new THREE.Group();
g_menu.add(menu);
g_menu.add(menu_box);
scene.add(g_menu);

const menu2 = g_menu.clone();
menu2.position.set(30,0,0);
scene.add(menu2);

//Registers
const reg_body_geo = new THREE.BoxGeometry(4,2,5);
const reg_body = new THREE.Mesh(reg_body_geo, reg_mat);
reg_body.position.set(-45,11.5,-33);

const reg_head_geo = new THREE.BoxGeometry(4,1.5,2);
const reg_head = new THREE.Mesh(reg_head_geo, reg_mat);
reg_head.position.set(-45,13.2,-31.5);

const register = new THREE.Group();
register.add(reg_body);
register.add(reg_head);
scene.add(register);

const reg2 = register.clone();
reg2.position.set(32,0,0);
scene.add(reg2);

//Bathroom Doors
const m_door = new THREE.Mesh(door_geo, m_door_mat);
m_door.position.set(25,9,-49);
scene.add(m_door);

const frame3 = frame.clone();
frame3.position.set(19.3,9.5,-49);

const frame4 = frame.clone();
frame4.position.set(30.5,9.5,-49);

const top_frame_small_geo = new THREE.BoxGeometry(10,1,1);
const top_frame_small = new THREE.Mesh(top_frame_small_geo, black_steel);
top_frame_small.position.set(25,18.5,-49);

const door_plate_geo = new THREE.BoxGeometry(8,4,0);
const door_plate = new THREE.Mesh(door_plate_geo, reg_mat);
door_plate.position.set(25,4,-48.4);

const silver_handle_geo = new THREE.BoxGeometry(1,3,0);
const silver_handle = new THREE.Mesh(silver_handle_geo, reg_mat);
silver_handle.position.set(29,9,-48.4);

const small_frame = new THREE.Group();
small_frame.add(frame3);
small_frame.add(frame4);
small_frame.add(top_frame_small);
small_frame.add(door_plate);
small_frame.add(silver_handle);
scene.add(small_frame);

const f_door = new THREE.Mesh(door_geo, f_door_mat);
f_door.position.set(42,9,-49);
scene.add(f_door);

const small_frame2 = small_frame.clone();
small_frame2.position.set(17,0,0);
scene.add(small_frame2);

//Carpet
const carpet_geo = new THREE.BoxGeometry(20,0,50);
const carpet = new THREE.Mesh(carpet_geo, carpet_mat);
carpet.position.set(-29.3,0.6,24.3);
scene.add(carpet);

//Camera
camera.position.set(70, 80, 130);
camera.lookAt(0,0,0);

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();