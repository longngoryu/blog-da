<template>


    <div class="all" style="text-align: center; display: flex;">


        <div class="main_wrapper" style=" margin-top: 30px; margin-left: 500px; text-align: center">
            <div class="main">
                <div class="antenna">
                    <div class="antenna_shadow"></div>
                    <div class="a1"></div>
                    <div class="a1d"></div>
                    <div class="a2"></div>
                    <div class="a2d"></div>
                    <div class="a_base"></div>
                </div>
                <div class="tv">
                    <div class="cruve">
                        <svg xml:space="preserve" viewBox="0 0 189.929 189.929"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1"
                            class="curve_svg">
                            <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"></path>
                        </svg>
                    </div>
                    <div class="display_div">
                        <div class="screen_out">
                            <div class="screen_out1">
                                <div class="screen">
                                    <span class="notfound_text" style="font-family: Arial, Helvetica, sans-serif;"> ĐĂNG
                                        NHẬP ĐỂ TIẾP TỤC </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lines">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                    <div class="buttons_div">
                        <div class="b1">
                            <div></div>
                        </div>
                        <div class="b2"></div>
                        <div class="speakers">
                            <div class="g1">
                                <div class="g11"></div>
                                <div class="g12"></div>
                                <div class="g13"></div>
                            </div>
                            <div class="g"></div>
                            <div class="g"></div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="base1"></div>
                    <div class="base2"></div>
                    <div class="base3"></div>
                </div>
            </div>
            <div class="text_404">
                <div class="text_4041">4</div>
                <div class="text_4042">0</div>
                <div class="text_4043">4</div>
            </div>
        </div>

        <button class="shadow__btn" style="margin-left: -310px; margin-top: 30px;">
            <a href="" style="text-decoration: none;">
                <router-link :to="{ name: 'admin-login' }" style="text-decoration: none;">
                    <span class=" self-center  rounded  " style="color: white;"> L O G I N</span>
                </router-link>
            </a>
        </button>
    </div>

</template>
<style>
button {
    position: relative;
    width: 11em;
    height: 4em;
    outline: none;
    transition: 0.1s;
    background-color: transparent;
    border: none;
    font-size: 13px;
    font-weight: bold;
    color: #000000;
}

#clip {
    --color: #2761c3;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: 5px double var(--color);
    box-shadow: inset 0px 0px 15px #195480;
    -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}

.arrow {
    position: absolute;
    transition: 0.2s;
    background-color: #2761c3;
    top: 35%;
    width: 11%;
    height: 30%;
}

#leftArrow {
    left: -13.5%;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
}

#rightArrow {
    -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
    left: 102%;
}

button:hover #rightArrow {
    background-color: #27c39f;
    left: -15%;
    animation: 0.6s ease-in-out both infinite alternate rightArrow8;
}

button:hover #leftArrow {
    background-color: #27c39f;
    left: 103%;
    animation: 0.6s ease-in-out both infinite alternate leftArrow8;
}

.corner {
    position: absolute;
    width: 4em;
    height: 4em;
    background-color: #2761c3;
    box-shadow: inset 1px 1px 8px #2781c3;
    transform: scale(1) rotate(45deg);
    transition: 0.2s;
}

#rightTop {
    top: -1.98em;
    left: 91%;
}

#leftTop {
    top: -1.96em;
    left: -3.0em;
}

#leftBottom {
    top: 2.10em;
    left: -2.15em;
}

#rightBottom {
    top: 45%;
    left: 88%;
}

button:hover #leftTop {
    animation: 0.1s ease-in-out 0.05s both changeColor8,
        0.2s linear 0.4s both lightEffect8;
}

button:hover #rightTop {
    animation: 0.1s ease-in-out 0.15s both changeColor8,
        0.2s linear 0.4s both lightEffect8;
}

button:hover #rightBottom {
    animation: 0.1s ease-in-out 0.25s both changeColor8,
        0.2s linear 0.4s both lightEffect8;
}

button:hover #leftBottom {
    animation: 0.1s ease-in-out 0.35s both changeColor8,
        0.2s linear 0.4s both lightEffect8;
}

button:hover .corner {
    transform: scale(1.25) rotate(45deg);
}

button:hover #clip {
    animation: 0.2s ease-in-out 0.55s both greenLight8;
    --color: #27c39f;
}

@keyframes changeColor8 {
    from {
        background-color: #2781c3;
    }

    to {
        background-color: #27c39f;
    }
}

@keyframes lightEffect8 {
    from {
        box-shadow: 1px 1px 5px #27c39f;
    }

    to {
        box-shadow: 0 0 2px #27c39f;
    }
}

@keyframes greenLight8 {
    from {}

    to {
        box-shadow: inset 0px 0px 32px #27c39f;
    }
}

@keyframes leftArrow8 {
    from {
        transform: translate(0px);
    }

    to {
        transform: translateX(10px);
    }
}

@keyframes rightArrow8 {
    from {
        transform: translate(0px);
    }

    to {
        transform: translateX(-10px);
    }
}

/*  */

/* Design Inspired by one of Stefan Devai's Design on Dribble */

.main_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30em;
    height: 30em;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5em;
}

.antenna {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #f27405;
    margin-bottom: -6em;
    margin-left: 0em;
    z-index: -1;
}

.antenna_shadow {
    position: absolute;
    background-color: transparent;
    width: 50px;
    height: 56px;
    margin-left: 1.68em;
    border-radius: 45%;
    transform: rotate(140deg);
    border: 4px solid transparent;
    box-shadow: inset 0px 16px #a85103, inset 0px 16px 1px 1px #a85103;
    -moz-box-shadow: inset 0px 16px #a85103, inset 0px 16px 1px 1px #a85103;
}

.antenna::after {
    content: "";
    position: absolute;
    margin-top: -9.4em;
    margin-left: 0.4em;
    transform: rotate(-25deg);
    width: 1em;
    height: 0.5em;
    border-radius: 50%;
    background-color: #f69e50;
}

.antenna::before {
    content: "";
    position: absolute;
    margin-top: 0.2em;
    margin-left: 1.25em;
    transform: rotate(-20deg);
    width: 1.5em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #f69e50;
}

.a1 {
    position: relative;
    top: -102%;
    left: -130%;
    width: 12em;
    height: 5.5em;
    border-radius: 50px;
    background-image: linear-gradient(#171717,
            #171717,
            #353535,
            #353535,
            #171717);
    transform: rotate(-29deg);
    clip-path: polygon(50% 0%, 49% 100%, 52% 100%);
}

.a1d {
    position: relative;
    top: -211%;
    left: -35%;
    transform: rotate(45deg);
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #979797;
    z-index: 99;
}

.a2 {
    position: relative;
    top: -210%;
    left: -10%;
    width: 12em;
    height: 4em;
    border-radius: 50px;
    background-color: #171717;
    background-image: linear-gradient(#171717,
            #171717,
            #353535,
            #353535,
            #171717);
    margin-right: 5em;
    clip-path: polygon(47% 0,
            47% 0,
            34% 34%,
            54% 25%,
            32% 100%,
            29% 96%,
            49% 32%,
            30% 38%);
    transform: rotate(-8deg);
}

.a2d {
    position: relative;
    top: -294%;
    left: 94%;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #979797;
    z-index: 99;
}

.notfound_text {
    background-color: black;
    padding-left: 0.3em;
    padding-right: 0.3em;
    font-size: 0.75em;
    color: white;
    letter-spacing: 0;
    border-radius: 5px;
    z-index: 10;
}

.tv {
    width: 17em;
    height: 9em;
    margin-top: 3em;
    border-radius: 15px;
    background-color: #d36604;
    display: flex;
    justify-content: center;
    border: 2px solid #1d0e01;
    box-shadow: inset 0.2em 0.2em #e69635;
}

.tv::after {
    content: "";
    position: absolute;
    width: 17em;
    height: 9em;
    border-radius: 15px;
    background: repeating-radial-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 50% 0/2500px 2500px,
        repeating-conic-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 60% 60%/2500px 2500px;
    background-blend-mode: difference;
    opacity: 0.09;
}

.curve_svg {
    position: absolute;
    margin-top: 0.25em;
    margin-left: -0.25em;
    height: 12px;
    width: 12px;
}

.display_div {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 3.5px 3.5px 0px #e69635;
}

.screen_out {
    width: auto;
    height: auto;

    border-radius: 10px;
}

.screen_out1 {
    width: 11em;
    height: 7.75em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}

.screen {
    width: 13em;
    height: 7.85em;
    font-family: Montserrat;
    border: 2px solid #1d0e01;
    background: repeating-radial-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 50% 0/2500px 2500px,
        repeating-conic-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 60% 60%/2500px 2500px;
    background-blend-mode: difference;
    animation: b 0.2s infinite alternate;
    border-radius: 10px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #252525;
    letter-spacing: 0.15em;
    text-align: center;
}

@keyframes b {
    100% {
        background-position: 50% 0, 60% 50%;
    }
}


.lines {
    display: flex;
    column-gap: 0.1em;
    align-self: flex-end;
}

.line1,
.line3 {
    width: 2px;
    height: 0.5em;
    background-color: black;
    border-radius: 25px 25px 0px 0px;
    margin-top: 0.5em;
}

.line2 {
    flex-grow: 1;
    width: 2px;
    height: 1em;
    background-color: black;
    border-radius: 25px 25px 0px 0px;
}

.buttons_div {
    width: 4.25em;
    align-self: center;
    height: 8em;
    background-color: #e69635;
    border: 2px solid #1d0e01;
    padding: 0.6em;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 0.75em;
    box-shadow: 3px 3px 0px #e69635;
}

.b1 {
    width: 1.65em;
    height: 1.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow: inset 2px 2px 1px #b49577, -2px 0px #513721,
        -2px 0px 0px 1px black;
}

.b1::before {
    content: "";
    position: absolute;
    margin-top: 1em;
    margin-left: 0.5em;
    transform: rotate(47deg);
    border-radius: 5px;
    width: 0.1em;
    height: 0.4em;
    background-color: #000000;
}

.b1::after {
    content: "";
    position: absolute;
    margin-top: 0.9em;
    margin-left: 0.8em;
    transform: rotate(47deg);
    border-radius: 5px;
    width: 0.1em;
    height: 0.55em;
    background-color: #000000;
}

.b1 div {
    content: "";
    position: absolute;
    margin-top: -0.1em;
    margin-left: 0.65em;
    transform: rotate(45deg);
    width: 0.15em;
    height: 1.5em;
    background-color: #000000;
}

.b2 {
    width: 1.65em;
    height: 1.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow: inset 2px 2px 1px #b49577, -2px 0px #513721,
        -2px 0px 0px 1px black;
}

.b2::before {
    content: "";
    position: absolute;
    margin-top: 1.05em;
    margin-left: 0.8em;
    transform: rotate(-45deg);
    border-radius: 5px;
    width: 0.15em;
    height: 0.4em;
    background-color: #000000;
}

.b2::after {
    content: "";
    position: absolute;
    margin-top: -0.1em;
    margin-left: 0.65em;
    transform: rotate(-45deg);
    width: 0.15em;
    height: 1.5em;
    background-color: #000000;
}

.speakers {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
}

.speakers .g1 {
    display: flex;
    column-gap: 0.25em;
}

.speakers .g1 .g11,
.g12,
.g13 {
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow: inset 1.25px 1.25px 1px #b49577;
}

.speakers .g {
    width: auto;
    height: 2px;
    background-color: #171717;
}

.bottom {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8.7em;
}

.base1 {
    height: 1em;
    width: 2em;
    border: 2px solid #171717;
    background-color: #4d4d4d;
    margin-top: -0.15em;
    z-index: -1;
}

.base2 {
    height: 1em;
    width: 2em;
    border: 2px solid #171717;
    background-color: #4d4d4d;
    margin-top: -0.15em;
    z-index: -1;
}

.base3 {
    position: absolute;
    height: 0.15em;
    width: 17.5em;
    background-color: #171717;
    margin-top: 0.8em;
}

.text_404 {
    position: absolute;
    display: flex;
    flex-direction: row;
    column-gap: 6em;
    z-index: -5;
    margin-bottom: 2em;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    font-family: Montserrat;
}

.text_4041 {
    transform: scaleY(24.5) scaleX(9);
}

.text_4042 {
    transform: scaleY(24.5) scaleX(9);
}

.text_4043 {
    transform: scaleY(24.5) scaleX(9);
}

/*  */
.shadow__btn {
    padding: 10px 20px;
    border: none;
    font-size: 17px;
    color: #fff;
    border-radius: 7px;
    letter-spacing: 4px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.5s;
    transition-property: box-shadow;
}

.shadow__btn {
    background: rgb(0, 140, 255);
    box-shadow: 0 0 25px rgb(0, 140, 255);
}

.shadow__btn:hover {
    box-shadow: 0 0 5px rgb(0, 140, 255),
        0 0 25px rgb(0, 140, 255),
        0 0 50px rgb(0, 140, 255),
        0 0 100px rgb(0, 140, 255);
}
</style>