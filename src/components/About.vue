<template>
    <v-app>
            <div id="about">
                <div class="v_main">
                    <!-- brand goal -->
                    <v-container class="about_goal">
                        <v-row class="d-flex about_goal_cont mx-auto">
                            <v-col cols="12" xs="12" sm="5" lg="5" class="about_goal_left hidden_left">
                                    <img src="@/assets/about_01.jpg" class="about_01_img">
                            </v-col>
                            <v-col cols="12" xs="12" sm="7" lg="7" class="about_goal_right">
                                <div class="about_goal_right_top hidden_in">
                                    <h2>BRAND GOAL</h2>
                                    <div class="txt_wrap">
                                    <p class="dc_txt about_box_01">&#39; KEEP IT CLOSE &#39;</p>
                                    </div>
                                    <p class="txt_01">국내산 프리미엄 소금 &#39;그레이 솔트&#39; 토판염 기반의 라이프스타일 브랜드</p>
                                    <p class="saltrain_logo dc_txt">Saltrain</p>
                                    <p class="txt_02 line_h">  
                                        먹을 수 있는 소금을 바탕으로 한 <br> 라이프스타일 프로덕트를 보다 &#39;더 가까이에서&#39;<br>
                                        즐길 수 있도록 돕는 것은 변함없는 솔트레인의 목표입니다&#46;
                                    </p>
                                </div>
                            </v-col>
                                <v-col cols="12" xs="12" sm="6" lg="6" class="d-flex justify-end align-self-end">
                                    <div class="about_goal_right_bottom hidden_right" >
                                        <img src="@/assets/about_02.jpg" class="about_02_img d-flex justify-end align-self-end">
                                    </div>
                                </v-col>
                        </v-row>
                    </v-container>
        
                    <!-- brand value -->
                    <v-container fluid>
                        <v-row>
                            <v-col>
                                <div class="about_value">
                                    <div class="about_value_cover"></div>
                                        <div class="about_value_cont">
                                            <div class="about_value_cont_01 hidden_up">
                                                <h2 class="slide_Down">BRAND VALUE</h2>
                                                    <p class="dc_txt about_box_02">&#39; Life essentials make you GOOD &#39;</p>
                                            </div>
                                            <div class="about_value_cont_02 hidden_up">
                                                <p class="line_h mb_32">솔트레인이 정의하는 &#39;좋음&#40;GOOD&#41;&#39;은 사용자가 우리의 제품을<br>
                                                    보고&#44; 쓰고&#44; 입고&#44; 바르는 모든 과정에서 얻는 긍정적인 감정을 의미합니다&#46;
                                                </p>
                                                <p class="line_h mb_32">
                                                    매일 사용할 수 밖에 없는 생활 필수품에 대한 진정한 만족감을 위해 솔트레인은 <br>
                                                    원료 선택부터 디자인까지&#44; 모든 과정에서 최고의 퀄리티를 우선시 합니다&#46;
                                                </p>
                                                <p class="line_h">
                                                    꾸미기보다 가꾸기에 집중하는 일상의 작은 돌봄&#46; <br>
                                                    기분 좋은 에센셜 아이템을 통해 더욱 만족스러운 라이프를 누리는 것&#46; <br>
                                                    감각적인 당신을 위해 솔트레인이 제공하는 궁극적인 가치입니다&#46;
                                                </p>
                                            </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>  
        
                    <!-- material -->
                    <v-container class="about_material">
                        <v-row class="material_cont mx-auto">
                            <v-col cols="12" xs="12" sm="5" lg="5">
                                <div class="material_left hidden_down">
                                    <img src="@/assets/about_04.jpg" class="about_material_img">
                                </div>
                            </v-col>
                                
                            <v-col cols="12" xs="12" sm="7" lg="7" class="align-self-center">
                                <div class="material_right hidden_in">
                                        <h2>MATERIAL</h2>
                                        <div class="txt_wrap">
                                        <p class="dc_txt about_box_03">&#39; GRAY SALT &#39;</p>
                                        </div>
                                        <p class="line_h mb_32">
                                            갯벌을 다져 만든 흙판에서 생산하는 천일염으로 <br>
                                            장인이 자연 갯벌을 다져 전통 방식으로 소량 생산한 소금입니다&#46;
                                        </p>
                                        <p class="line_h mb_32">
                                            국제 미식 품평회&#40;ITQI&#41; &#34;2 STAR&#34;&#44; <br>
                                            세계적 인증심사&#40;Superior Taste Award&#41;를 수상 받았습니다&#46;
                                        </p>
                                        <p class="line_h">
                                            미네랄 함량 UP 나트륨 DOWN<br>
                                            다양한 유기화합물의 영양분과 미네랄을 다량 함유하고 있습니다&#46;
                                        </p>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                    <div class="dc_txt slide-container">
                        <p class="S_logo slide">Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain
                            Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain
                        </p>
                    </div>
                </div>
            </div>
        </v-app>
        </template>
        
        <script setup>
import { onMounted, ref } from 'vue';

// Initialize lists for demonstration purposes
const goalItems = ref([1, 2, 3]);
const valueItems = ref([1, 2]);
const materialItems = ref([1, 2, 3]);

const initIntersectionObservers = () => {
    const goalObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const leftElement = entry.target.querySelector('.about_goal_left');
            const rightTopElement = entry.target.querySelector('.about_goal_right_top');
            const rightBottomElement = entry.target.querySelector('.about_goal_right_bottom');

            if (entry.isIntersecting) {
                if (leftElement) {
                    leftElement.classList.add('fade_left');
                }

                if (rightBottomElement) {
                    rightBottomElement.classList.add('fade_right');

                    if (rightTopElement) {
                        rightTopElement.classList.add('fade_in');
                    }
                }
            }
        });
    }, { threshold: 0.4 });

    const valueObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const cont01Element = entry.target.querySelector('.about_value_cont_01');
            const cont02Element = entry.target.querySelector('.about_value_cont_02');

            if (entry.isIntersecting) {
                if (cont01Element) {
                    cont01Element.classList.add('fade_down');
                }

                if (cont02Element) {
                    setTimeout(() => {
                        cont02Element.classList.add('fade_down');
                    }, 500);
                }
            } 
        });
    }, { threshold: 0.4 });

    const materialObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const leftElements = entry.target.querySelectorAll('.material_left');
            const rightElements = entry.target.querySelectorAll('.material_right');

            if (entry.isIntersecting) {
                leftElements.forEach((leftElement, index) => {
                    setTimeout(() => {
                        leftElement.classList.add('fade_up');
                    }, index * 500);
                });

                rightElements.forEach((rightElement, index) => {
                    setTimeout(() => {
                        rightElement.classList.add('fade_up');
                    }, (index + leftElements.length) * 500);
                });
            } 
        });
    }, { threshold: 0.4 });

    onMounted(() => {
        document.querySelectorAll('.about_goal').forEach(element => {
            goalObserver.observe(element);
        });

        document.querySelectorAll('.about_value').forEach(element => {
            valueObserver.observe(element);
        });

        document.querySelectorAll('.about_material').forEach(element => {
            materialObserver.observe(element);
        });
    });
}

initIntersectionObservers();
</script>
        
        <style scoped>
        /* animation 효과 */
        
        /* 초기 상태 */
        
        .hidden_left{
            opacity: 0;
            transition: all 1.5s;
            transform: translateX(-100%);
        } 
        
        .hidden_right{
            opacity: 0;
            transition: opacity 1.5s, transform 1.5s;
            transform: translateX(100vw);
        }
        
        .hidden_down{
            opacity: 0;
            transition: all 1.5s;
            transform: translateY(100%);
        }
        
        .hidden_up{
            opacity: 0;
            transition: all 1s;
            transform: translateY(-20px);
        }
        
        .hidden_in{
            opacity: 0;
            transition: all 1s;
        }
        
        
        /* 최종 상태 */
        
        .fade_left{
            opacity: 1;
            transform: translateX(0); 
        }
        
        .fade_right{
            opacity: 1;
           transform: translateX(0); 
        }
        
        .fade_up{
            opacity: 1;
            transform: translateY(0);
        }
        
        .fade_down {
            opacity: 1;
            transform: translateY(0);
        }
        
        
        .fade_in{
            opacity: 1;
        }
        
        /* s_logo 애니메이션 효과 */
        
        .slide-container {
            overflow: hidden; 
            white-space: nowrap; 
            width: 100%; 
            box-sizing: border-box;
        }
        
        .S_logo {
            display: inline-block; 
            animation: slide 20s linear infinite; 
        }
        
        @keyframes slide {
            from {
                transform: translateX(0); 
            }
            to {
                transform: translateX(-100%); 
            }
        }
        
        /* css 효과 */
        
        
        .v_main {
            padding-top: 0; /* 메인 페이지의 상단 패딩 제거 */
            padding-bottom: 0; /* 메인 페이지의 하단 패딩 제거 */
        }
        
        #about{
            width: 100%;
            background: #161616;
            position: relative;
        }
        
        /* reset css */
        
        .v_main{
            width: 100%;
            background: #161616;
            color: #fff;
         }
        
        h2{
            margin-bottom: 32px;
        }
        
        p{
            font-size: 20px;
        }
        
        .line_h{
            line-height: 1.5;
        }

        .dc_txt{
            font-size: 40px; font-family: "urbane-condensed", sans-serif; font-weight: 700; font-style: normal;
        }
        
        /* about_goal */
        .about_goal_cont{
           max-width:1280px;
           margin: 0 auto;
           padding: 5rem 0 7.5rem;
        }
        
        #about .about_goal_left{
            opacity: 1;
            width: 100%;
            overflow: hidden;
        }
        
        #about .about_goal_right{
            width: 100%;
            padding-left: 100px;
            margin-bottom: 100px;
            box-sizing: border-box;
        }
        
        #about .about_goal_left .about_01_img{
           max-width: 100%;
            height: auto;
            object-fit: cover;
        }
        
        .about_box_01{
            max-width: 329px;
            background:#1A51E6;
            padding: 12px 10px 3px 20px;
            margin-bottom: 3.75rem;
        }
        
        #about .saltrain_logo{
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            font-size: 4rem;
        }
        
        .txt_02{
            margin-bottom: 132px;
        }
        
        /* about_value */
        
        .about_value{
            width: 100%;
            height: auto;
            background: url(../assets/about_bg.jpg) no-repeat;
            background-size: cover;
            position: relative;
            z-index: 0;
        }
        
        .about_value_cover{
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
        
        .about_value_cont{
            padding: 7.5rem 0;
            width: 100%;
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 2;
        }
        
        .about_box_02{
            max-width: 640px;
            margin: 0 auto 3.75rem;
            background:#1A51E6;
            padding: 10px 12px 2px 15px;
            line-height: 1.1; 
            box-sizing: border-box;
        }
        
        .mb_32{
            margin-bottom: 32px;
        }
        
        /* material */
        
        .about_material{
           max-width: 1280px;
            margin: 0 auto;
            display: flex;
            padding: 7.5rem 0;
        }
        
        .material_cont{
            max-width: 1280px;
            padding: 7.5rem 0;
        }
        
        .material_left{
            width: 100%;
        }
        
        .material_left img{
            width: 100%;
            height: auto;
        }
        
        .material_right{
            padding-left: 100px;
            box-sizing: border-box;
        }
        
        .about_02_img{
            width: 100%; 
            height: auto;
        }
        
        .about_box_03{
            width: 257px;
            margin-bottom: 3.75rem;
            background:#1A51E6;
            padding: 15px 12px 8px 15px;
        }
        
        #about .S_logo{
            width: 100%;
            font-size: 120px;
            position: relative;
            margin: 120px;
        }
        
        .slide-container {
            overflow: hidden; 
            white-space: nowrap; 
            width: 100%;
            box-sizing: border-box;
          }


          @media screen and (max-width:600px){
            .about_goal_cont{
                padding: 0;
             }

             #about .about_goal_right{
                padding-left: 0;
                text-align: center;
                margin-bottom: 0;
            }

            .about_box_01{
                margin:0 auto 3.75rem;
            }

            .txt_02{
                margin-bottom: 40px;
            }

            p{
                font-size: 16px;
            }

            .about_material{
                padding: 0;
            }


             .material_right{
                padding: 0;
             }

             .material_cont{
                text-align: center;
             }

             .about_box_03{
                margin:0 auto 3.75rem;
            }

            .slide-container{
                display: none;
            }
          }
          
          /*
        
        @media screen and (max-width:768px){
            p{
                font-size: 14px;
            }
        
            .dc_txt{font-size:  1rem; 
                font-family: "urbane-condensed", sans-serif; 
                font-weight: 700; font-style: normal;
               }
            
            /* about_goal 
            .about_goal_cont{
                max-width:480px;
                 margin: 0 auto;
                 padding: 0;
                 text-align: center;
             }
        
             #about .about_goal_right{
                padding:0;
                overflow: hidden;
            }
        
            .about_01_img{
                width: 100%;
               margin-bottom: 40px;
            }
        
            .about_box_01{
                margin: 0 auto;
            }
        
            .dc_txt_change{
                font-size: 2.2rem; 
                font-family: "urbane-condensed",sans-serif; 
                font-weight: 700;
                font-style: normal;
                height: auto;
            }
        
            .material_cont{
                max-width: 480px;
                text-align: center;
                padding: 0;
            }
        
            .txt_02{
                margin-bottom: 80px;
            }
        
           #about .about_material{
                max-width: 480px;
                margin: 0 auto;
                display: flex;
                padding:0 0 80px;
                box-sizing: border-box;
            }
        
            .material_right{
                padding-left: 0;
            }
        
            .about_box_03{
                margin: auto;
            }
           
        
            #about .S_logo{
                display: none;
            }
        }*/ 
        
        </style>
        
        
        
   