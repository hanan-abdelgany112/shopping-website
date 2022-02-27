import React, {  useState } from 'react';

import mobile1 from '../image/mobile1.jpg';
import mobile2 from '../image/mobile2.jpg';
import mobile3 from '../image/mobile3.jpg';
import mobile4 from '../image/mobile4.jpg';
import mobile5 from '../image/mobile5.jpg';
import mobile6 from '../image/mobile6.jpeg';
import mobile7 from '../image/mobile7.jpeg';
import mobile8 from '../image/mobile8.jpeg';
import mobile9 from '../image/mobile9.jpeg';
import mobile10 from '../image/mobile10.jpeg';
import mobile11 from '../image/mobile11.jpeg';
import mobile12 from '../image/mobile12.jpeg';

import laptop1 from '../image/laptop1.jpg';
import laptop2 from '../image/laptop2.jpg';
import laptop3 from '../image/laptop3.jpg';
import laptop4 from '../image/laptop4.jpg';
import laptop5 from '../image/laptop5.jpg';
import laptop6 from '../image/laptop6.jpeg';
import laptop7 from '../image/laptop7.jpeg';
import laptop8 from '../image/laptop8.jpeg';
import laptop9 from '../image/laptop9.jpeg';
import laptop10 from '../image/laptop10.jpeg';
import laptop11 from '../image/laptop11.jpeg';
import laptop12 from '../image/laptop12.jpeg';

import makeup1 from '../image/makeup1.jpg';
import makeup2 from '../image/makeup2.jpg';
import makeup3 from '../image/makeup3.jpg';
import makeup4 from '../image/makeup4.jpg';
import makeup5 from '../image/makeup5.jpg';
import makeup6 from '../image/makeup6.jpeg';
import makeup7 from '../image/makeup7.jpeg';
import makeup8 from '../image/makeup8.jpeg';
import makeup9 from '../image/makeup9.jpeg';
import makeup10 from '../image/makeup10.jpeg';
import makeup11 from '../image/makeup11.jpeg';
import makeup12 from '../image/makeup12.jpeg';

import clothes1 from '../image/woman1.jpg';
import clothes2 from '../image/woman2.jpg';
import clothes3 from '../image/woman3.jpg';
import clothes4 from '../image/woman4.jpg';
import clothes5 from '../image/woman5.jpg';
import clothes6 from '../image/woman6.jpeg';
import clothes7 from '../image/man1.jpg';
import clothes8 from '../image/man2.jpg';
import clothes9 from '../image/man3.jpg';
import clothes10 from '../image/man4.jpg';
import clothes11 from '../image/man5.jpg';
import clothes12 from '../image/man6.jpeg';
import clothes13 from '../image/man7.jpeg';
import clothes14 from '../image/children1.jpg';
import clothes15 from '../image/children2.jpg';
import clothes16 from '../image/children3.jpg';
import clothes17 from '../image/children4.jpg';
import clothes18 from '../image/children5.jpg';
import clothes19 from '../image/children7.jpeg';
import clothes20 from '../image/children8.jpeg';
import clothes21 from '../image/children9.jpeg';

import Watches1 from '../image/Watches1.jpeg';
import Watches2 from '../image/Watches2.jpeg';
import Watches3 from '../image/Watches3.jpeg';
import Watches4 from '../image/Watches4.jpeg';
import Watches5 from '../image/Watches5.jpeg';
import Watches6 from '../image/Watches6.jpeg';
import Watches7 from '../image/Watches7.jpeg';
import Watches8 from '../image/Watches8.jpeg';
import Watches9 from '../image/Watches9.jpeg';
import Watches10 from '../image/Watches10.jpeg';
import Watches11 from '../image/Watches11.jpeg';
import Watches12 from '../image/Watches12.jpeg';

import shoes1 from '../image/shoes1.jpeg';
import shoes2 from '../image/shoes2.jpeg';
import shoes3 from '../image/shoes3.jpeg';
import shoes4 from '../image/shoes4.jpeg';
import shoes5 from '../image/shoes5.jpeg';
import shoes6 from '../image/shoes6.jpeg';
import shoes7 from '../image/shoes7.jpeg';
import shoes8 from '../image/shoes8.jpeg';
import shoes9 from '../image/shoes9.jpeg';
import shoes10 from '../image/shoes10.jpeg';
import shoes11 from '../image/shoes11.jpeg';
import shoes12 from '../image/shoes12.jpeg';

import jewelry1 from '../image/jewelry1.jpeg';
import jewelry2 from '../image/jewelry2.jpeg';
import jewelry3 from '../image/jewelry3.jpeg';
import jewelry4 from '../image/jewelry4.jpeg';
import jewelry5 from '../image/jewelry5.jpeg';
import jewelry6 from '../image/jewelry6.jpeg';
import jewelry7 from '../image/jewelry7.jpeg';
import jewelry8 from '../image/jewelry8.jpeg';
import jewelry9 from '../image/jewelry9.jpeg';
import jewelry10 from '../image/jewelry10.jpeg';
import jewelry11 from '../image/jewelry11.jpeg';
import jewelry12 from '../image/jewelry12.jpeg';

import perfumes1 from '../image/perfumes1.jpeg';
import perfumes2 from '../image/perfumes2.jpeg';
import perfumes3 from '../image/perfumes3.jpeg';
import perfumes4 from '../image/perfumes4.jpeg';
import perfumes5 from '../image/perfumes5.jpeg';
import perfumes6 from '../image/perfumes6.jpeg';
import perfumes7 from '../image/perfumes7.jpeg';
import perfumes8 from '../image/perfumes8.jpeg';
import perfumes9 from '../image/perfumes9.jpeg';
import perfumes10 from '../image/perfumes10.jpeg';
import perfumes11 from '../image/perfumes11.jpeg';
import perfumes12 from '../image/perfumes12.jpeg';

import glasses1 from '../image/glasses1.jpeg';
import glasses2 from '../image/glasses2.jpeg';
import glasses3 from '../image/glasses3.jpeg';
import glasses4 from '../image/glasses4.jpeg';
import glasses5 from '../image/glasses5.jpeg';
import glasses6 from '../image/glasses6.jpeg';
import glasses7 from '../image/glasses7.jpeg';
import glasses8 from '../image/glasses8.jpeg';
import glasses9 from '../image/glasses9.jpeg';
import glasses10 from '../image/glasses10.jpeg';
import glasses11 from '../image/glasses11.jpeg';
import glasses12 from '../image/glasses12.jpeg';

import housewares1 from '../image/housewares1.jpeg';
import housewares2 from '../image/housewares2.jpeg';
import housewares3 from '../image/housewares3.jpeg';
import housewares4 from '../image/housewares4.jpeg';
import housewares5 from '../image/housewares5.jpeg';
import housewares6 from '../image/housewares6.jpeg';

import supermarket1 from '../image/supermarket1.jpeg';
import supermarket2 from '../image/supermarket2.jpeg';
import supermarket3 from '../image/supermarket3.jpeg';
import supermarket4 from '../image/supermarket4.jpeg';
import supermarket5 from '../image/supermarket5.jpeg';
import supermarket6 from '../image/supermarket6.jpeg';
import supermarket7 from '../image/supermarket7.jpeg';
import supermarket8 from '../image/supermarket8.jpeg';
import supermarket9 from '../image/supermarket9.jpeg';

import health1 from '../image/health1.jpeg';
import health2 from '../image/health2.jpeg';
import health3 from '../image/health3.jpeg';
import health4 from '../image/health4.jpeg';
import health5 from '../image/health5.jpeg';
import health6 from '../image/health6.jpeg';


import '../style/Products.css';


export default function Products() {
    const [count,setCount] = useState(0);
    
    const data = {
        all: [
            { id: 1, type: 'mobile', head: '5,678.00 EG', image: mobile1, discription: 'ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black' },
            { id: 2, type: 'mobile', head: '8,789.00 EG', image: mobile2, discription: 'ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black' },
            { id: 3, type: 'mobile', head: '6,499.00 EG', image: mobile3, discription: 'ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black' },
            { id: 4, type: 'mobile', head: '7,888.00 EG', image: mobile4, discription: 'iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black' },
            { id: 5, type: 'mobile', head: '18,200.00 EG', image: mobile5, discription: 'iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black' },
            { id: 30, type: 'mobile', head: '23,430.00 EG', image: mobile6, discription: 'iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black' },
            { id: 31, type: 'mobile', head: '4,888.00 EG', image: mobile7, discription: 'ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black' },
            { id: 32, type: 'mobile', head: '6,499.00 EG', image: mobile8, discription: 'ZERO X Pro Dual Sim  8GB RAM 128GB ROM Nebula Black iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim  8GB RAM 128GB ROM Nebula Black ' },
            { id: 33, type: 'mobile', head: '8,789.00 EG', image: mobile9, discription: 'ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim 8GB RAM 128GB ROM Nebula Black' },
            { id: 34, type: 'mobile', head: '23,430.00 EG', image: mobile10, discription: 'iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim  8GB RAM 128GB ROM Nebula Black iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim  8GB RAM 128GB ROM Nebula Black ' },
            { id: 35, type: 'mobile', head: '7,888.00 EG', image: mobile11, discription: 'ZERO X Pro Dual Sim  8GB RAM 128GB ROM Nebula Black iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim  8GB RAM 128GB ROM Nebula Black ' },
            { id: 36, type: 'mobile', head: '5,999.00 EG', image: mobile12, discription: ' Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim  8GB RAM 128GB ROM Nebula Black iPhone 12 Pro Max with FaceTime 256GB 5G - Ocean Blue - Middle East Version ZERO X Pro Dual Sim  8GB RAM 128GB ROM Nebula Black ' },
            
            { id: 6, type: 'laptop', head: '7,998.00 EG', image: laptop1, discription: ' K513EA - BQ913T Laptop With 15.6-Inch FHD Screen Core 13 Processor Core g i3-1115G4 Processor 4GB RAM 256GB RAM Intel UHD Graphics Windows Graphics English / Arabic Silver Clear.' },
            { id: 7, type: 'laptop', head: '19,500.00 EG', image: laptop2, discription: 'MSI GF65 Thin 092-10UE With 15.6-Inch FHD Display / Intel Core i7-10750H Processor / 8GB RAM / 512GB SSD / NVIDIA GeForce 3060 RTX 6GB Graphic Card /  Windows 10 Operating System English Arabic Black' },
            { id: 8, type: 'laptop', head: '11,555.00 EG', image: laptop3, discription: 'Ideapad Gaming 3 Laptop , With 15.6 / Intel 10Th Core 17-10750H / 16GB RAM / 512GB SSD / Nvidia GeForce GTX 1650Ti 4GB Graphics / English / Arabic Windows 10 / English / Arabic Black Lenovo' },
            { id: 9, type: 'laptop', head: '22,998.00 EG', image: laptop4, discription: 'Ideapad Gaming 3 Laptop , With 15.6 / Intel 10Th Core 17-10750H / 16GB RAM / 512GB SSD / Nvidia GeForce GTX 1650Ti 4GB Graphics / English / Arabic Windows 10 / English / Arabic Black Lenovo' },
            { id: 10, type: 'laptop', head: '21,555.00 EG', image: laptop5, discription: 'MSI GF65 Thin 092-10UE With 15.6-Inch FHD Display / Intel Core i7-10750H Processor / 8GB RAM / 512GB SSD / NVIDIA GeForce 3060 RTX 6GB Graphic Card /  Windows 10 Operating System English Arabic Black' },
            { id: 23, type: 'laptop', head: '33,555.00 EG', image: laptop6, discription: 'K513EA - BQ913T Laptop With 15.6-Inch FHD Screen Core 13 Processor Core g i3-1115G4 Processor 4GB RAM 256GB RAM Intel UHD Graphics Windows Graphics English / Arabic Silver Clear' },
            { id: 24, type: 'laptop', head: '20,444.00 EG', image: laptop7, discription: 'Apple MacBook Pro 14 - inch Apple M1 Pro chip with 8 - core CPU and 14 - core GPU 16GB Ram 512GB English language space gray SSD' },
            { id: 25, type: 'laptop', head: '35,555.00 EG', image: laptop8, discription: 'Apple MacBook Pro 14 - inch Apple M1 Pro chip with 8 - core CPU and 14 - core GPU 16GB Ram 512GB English language space gray SSD' },
            { id: 26, type: 'laptop', head: '13,555.00 EG', image: laptop9, discription: 'Apple MacBook Pro 14 - inch Apple M1 Pro chip with 8 - core CPU and 14 - core GPU 16GB Ram 512GB English language space gray SSD ' },
            { id: 27, type: 'laptop', head: '24,478.00 EG', image: laptop10, discription: 'Apple iMac With 21.5-Inch Display, Core 13 Quad-Core 3.6GHz Processor/8GB RAM/1TB HDD/AMD Radeon Pro 555X 2GB Graphics Card - 2019 Silver' },
            { id: 28, type: 'laptop', head: '25,578.00 EG', image: laptop11, discription: 'Apple iMac With 21.5-Inch Display, Core 13 Quad-Core 3.6GHz Processor/8GB RAM/1TB HDD/AMD Radeon Pro 555X 2GB Graphics Card - 2019 Silver ' },
            { id: 29, type: 'laptop', head: '12,345.00 EG', image: laptop12, discription: 'Apple iMac With 21.5-Inch Display, Core 13 Quad-Core 3.6GHz Processor/8GB RAM/1TB HDD/AMD Radeon Pro 555X 2GB Graphics Card - 2019 Silver' },
        

            { id: 11, type: 'makeup', head: 'Head 1', image: makeup1, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 12, type: 'makeup', head: 'Head 2', image: makeup2, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 13, type: 'makeup', head: 'Head 3', image: makeup3, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 14, type: 'makeup', head: 'Head 4', image: makeup4, discription: ' an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 15, type: 'makeup', head: 'Head 5', image: makeup5, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 37, type: 'makeup', head: 'Head 5', image: makeup6, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 38, type: 'makeup', head: 'Head 5', image: makeup7, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 39, type: 'makeup', head: 'Head 5', image: makeup8, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 40, type: 'makeup', head: 'Head 5', image: makeup9, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 41, type: 'makeup', head: 'Head 5', image: makeup10, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 42, type: 'makeup', head: 'Head 5', image: makeup11, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 43, type: 'makeup', head: 'Head 5', image: makeup12, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            
            { id: 16, type: 'clothes', head: 'Head 6', image: clothes1, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 17, type: 'clothes', head: 'Head 7', image: clothes2, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 18, type: 'clothes', head: 'Head 8', image: clothes3, discription: ' an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 19, type: 'clothes', head: 'Head 14', image: clothes4, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 20, type: 'clothes', head: 'Head 15', image: clothes5, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 21, type: 'clothes', head: 'Head 20', image: clothes6, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 22, type: 'clothes', head: 'Head 21', image: clothes7, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 44, type: 'clothes', head: 'Head 21', image: clothes8, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 45, type: 'clothes', head: 'Head 21', image: clothes9, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 46, type: 'clothes', head: 'Head 21', image: clothes10, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 47, type: 'clothes', head: 'Head 21', image: clothes11, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 48, type: 'clothes', head: 'Head 21', image: clothes12, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 49, type: 'clothes', head: 'Head 21', image: clothes13, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 50, type: 'clothes', head: 'Head 21', image: clothes14, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 51, type: 'clothes', head: 'Head 21', image: clothes15, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 52, type: 'clothes', head: 'Head 21', image: clothes16, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 53, type: 'clothes', head: 'Head 21', image: clothes17, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 54, type: 'clothes', head: 'Head 21', image: clothes18, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 55, type: 'clothes', head: 'Head 21', image: clothes19, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 56, type: 'clothes', head: 'Head 21', image: clothes20, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 57, type: 'clothes', head: 'Head 21', image: clothes21, discription: '  an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            
            { id: 58, type: 'Watches', head: 'Head 1', image: Watches1, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 59, type: 'Watches', head: 'Head 1', image: Watches2, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 60, type: 'Watches', head: 'Head 1', image: Watches3, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 61, type: 'Watches', head: 'Head 1', image: Watches4, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 62, type: 'Watches', head: 'Head 1', image: Watches5, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 63, type: 'Watches', head: 'Head 1', image: Watches6, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 64, type: 'Watches', head: 'Head 1', image: Watches7, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 65, type: 'Watches', head: 'Head 1', image: Watches8, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 66, type: 'Watches', head: 'Head 1', image: Watches9, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 67, type: 'Watches', head: 'Head 1', image: Watches10, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 68, type: 'Watches', head: 'Head 1', image: Watches11, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 69, type: 'Watches', head: 'Head 1', image: Watches12, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },

            { id: 70, type: 'shoes', head: 'Head 1', image: shoes1, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 71, type: 'shoes', head: 'Head 1', image: shoes2, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 72, type: 'shoes', head: 'Head 1', image: shoes3, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 73, type: 'shoes', head: 'Head 1', image: shoes4, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 74, type: 'shoes', head: 'Head 1', image: shoes5, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 75, type: 'shoes', head: 'Head 1', image: shoes6, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 76, type: 'shoes', head: 'Head 1', image: shoes7, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 77, type: 'shoes', head: 'Head 1', image: shoes8, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 78, type: 'shoes', head: 'Head 1', image: shoes9, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 79, type: 'shoes', head: 'Head 1', image: shoes10, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 80, type: 'shoes', head: 'Head 1', image: shoes11, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 81, type: 'shoes', head: 'Head 1', image: shoes12, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },

            { id: 82, type: 'jewelry', head: 'Head 1', image: jewelry1, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 83, type: 'jewelry', head: 'Head 1', image: jewelry2, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 84, type: 'jewelry', head: 'Head 1', image: jewelry3, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 85, type: 'jewelry', head: 'Head 1', image: jewelry4, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 86, type: 'jewelry', head: 'Head 1', image: jewelry5, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 87, type: 'jewelry', head: 'Head 1', image: jewelry6, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 88, type: 'jewelry', head: 'Head 1', image: jewelry7, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 89, type: 'jewelry', head: 'Head 1', image: jewelry8, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 90, type: 'jewelry', head: 'Head 1', image: jewelry9, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 91, type: 'jewelry', head: 'Head 1', image: jewelry10, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 92, type: 'jewelry', head: 'Head 1', image: jewelry11, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 93, type: 'jewelry', head: 'Head 1', image: jewelry12, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },

            { id: 94, type: 'perfumes', head: 'Head 1', image: perfumes1, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 95, type: 'perfumes', head: 'Head 1', image: perfumes2, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 96, type: 'perfumes', head: 'Head 1', image: perfumes3, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 97, type: 'perfumes', head: 'Head 1', image: perfumes4, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 98, type: 'perfumes', head: 'Head 1', image: perfumes5, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 99, type: 'perfumes', head: 'Head 1', image: perfumes6, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 100, type: 'perfumes', head: 'Head 1', image: perfumes7, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 101, type: 'perfumes', head: 'Head 1', image: perfumes8, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 102, type: 'perfumes', head: 'Head 1', image: perfumes9, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 103, type: 'perfumes', head: 'Head 1', image: perfumes10, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 104, type: 'perfumes', head: 'Head 1', image: perfumes11, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 105, type: 'perfumes', head: 'Head 1', image: perfumes12, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },

            { id: 106, type: 'glasses', head: 'Head 1', image: glasses1, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 107, type: 'glasses', head: 'Head 1', image: glasses2, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 108, type: 'glasses', head: 'Head 1', image: glasses3, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 109, type: 'glasses', head: 'Head 1', image: glasses4, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 110, type: 'glasses', head: 'Head 1', image: glasses5, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 111, type: 'glasses', head: 'Head 1', image: glasses6, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 112, type: 'glasses', head: 'Head 1', image: glasses7, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 113, type: 'glasses', head: 'Head 1', image: glasses8, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 114, type: 'glasses', head: 'Head 1', image: glasses9, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 115, type: 'glasses', head: 'Head 1', image: glasses10, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 116, type: 'glasses', head: 'Head 1', image: glasses11, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 117, type: 'glasses', head: 'Head 1', image: glasses12, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },

            { id: 118, type: 'housewares', head: 'Head 1', image: housewares1, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 119, type: 'housewares', head: 'Head 1', image: housewares2, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 120, type: 'housewares', head: 'Head 1', image: housewares3, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 121, type: 'housewares', head: 'Head 1', image: housewares4, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 122, type: 'housewares', head: 'Head 1', image: housewares5, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 123, type: 'housewares', head: 'Head 1', image: housewares6, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },

            { id: 124, type: 'supermarket', head: 'Head 1', image: supermarket1, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 125, type: 'supermarket', head: 'Head 1', image: supermarket2, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 126, type: 'supermarket', head: 'Head 1', image: supermarket3, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 127, type: 'supermarket', head: 'Head 1', image: supermarket4, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 128, type: 'supermarket', head: 'Head 1', image: supermarket5, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 129, type: 'supermarket', head: 'Head 1', image: supermarket6, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 130, type: 'supermarket', head: 'Head 1', image: supermarket7, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 131, type: 'supermarket', head: 'Head 1', image: supermarket8, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 132, type: 'supermarket', head: 'Head 1', image: supermarket9, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },

            { id: 133, type: 'health', head: 'Head 1', image: health1, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 134, type: 'health', head: 'Head 1', image: health2, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 135, type: 'health', head: 'Head 1', image: health3, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 136, type: 'health', head: 'Head 1', image: health4, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 137, type: 'health', head: 'Head 1', image: health5, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },
            { id: 138, type: 'health', head: 'Head 1', image: health6, discription: 'an A-line skirt fits closely around the waist and is slightly wider at the bottom backless .ADJECTIVE a backless dress does not cover the back or shoulders baggy. ADJECTIVE baggy clothes are very loose on your body.' },

        ]
    }
    const [Data, setData] = useState(data);
    const increaseCount =()=>{
        setCount(count+1)
        }
 

    const filterData = (filterDataElement) => {
        var element = {}, all = [];
        if (filterDataElement == 'all') {
            all = data.all;
        } else {
            data.all.filter((value) => {
                if (value.type == filterDataElement) {
                    element = value;
                    all.push(element);
                }
            })
        }
        setData({ all });
    }

    return (
        <div>
            <div className="container products">
                <h1 className="text-center bg-info">Products</h1>
                <div className="control-buttons">
                    <button type="button" className="btn btn-info mx-1" onClick={() => { filterData('all') }}> All :-</button>
                    <button type="button" className="btn btn-warning mx-1" onClick={() => { filterData('laptop') }}>Laptops</button>
                    <button type="button" className="btn btn-success mx-1" onClick={() => { filterData('mobile') }}>Mobiles</button>
                    <button type="button" className="btn btn-danger mx-1" onClick={() => { filterData('makeup') }}>Makeup</button>
                    <button type="button" className="btn btn-secondary mx-1" onClick={() => { filterData('clothes') }}>Clothes</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={() => { filterData('Watches') }}>Watches</button>
                    <button type="button" className="btn btn-warning mx-1" onClick={() => { filterData('shoes') }}>Shoes</button>
                    <button type="button" className="btn btn-success mx-1" onClick={() => { filterData('jewelry') }}>Jewelry</button>
                    <button type="button" className="btn btn-danger mx-1" onClick={() => { filterData('perfumes') }}>Perfumes</button>
                    <button type="button" className="btn btn-secondary mx-1" onClick={() => { filterData('glasses') }}>Glasses</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={() => { filterData('housewares') }}>Housewares</button>
                    <button type="button" className="btn btn-warning mx-1" onClick={() => { filterData('supermarket') }}>Supermarket</button>
                    <button type="button" className="btn btn-success mx-1" onClick={() => { filterData('health') }}>Health 
                    </button>
                    
                </div>
                <div className="row">
                    {
                        Data.all.map((value) => {
                            return (
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5" key={value.id}>
                                    <div className="card">
                                        <img className="card-img-top" src={value.image} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.head}</h5>
                                            <p className="card-text">{value.discription}</p>
                                            <a className="btn btn-primary" onClick={increaseCount}>Add To Card</a>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )

}
