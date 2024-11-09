<template>
    <div id="footer">
            <v-footer class="v-footer" color="#000" >
                <v-row>
                    <div class="footer_wrap">
                        <div class="footer_top">
                            <ul>
                                <li><a href="#none">회사소개</a></li>
                                <li><a href="#none">이용약관</a></li>
                                <li><a href="#none">개인정보처리방침</a></li>
                                <li><a href="#none">이용안내</a></li>
                                <li><a href="#none">서비스센터</a></li>
                                <li><a href="#none">기업구매문의</a></li>
                                <li><a href="#none">SNS</a></li>
                            </ul>
                        </div>
                        <div class="footer_bottom">
                            <address>
                                <div class="footer_bottom_top">
                                    <p class="company">(주)비온뒤컴퍼니</p>
                                    <div class="footer_bottom_address">
                                    <p>대표 &#124; 강운철</p>
                                    <p>사업자등록번호 &#124; 331-81-00150</p>
                                    <p>통신판매업 신고번호 &#124; 제 2020-서울강남-02659 <span> <a href="#" @click.prevent="openPopup('https://www.ftc.go.kr/bizCommPop.do?wrkr_no=3318100150')">&#91;사업자정보확인&#93;</a></span></p>
                                    <p>주소 &#124; 서울 강남구 논현로149길 31 401호 &#40;주&#41; 비온뒤컴퍼니</p>
                                </div>
                                </div>
                                <div class="footer_bottom_bottom">
                                    <p>고객센터 &#124; 070-4916-7077</p>
                                    <p>팩스 &#124; 02-546-6404</p>
                                    <p>개인정보보호책임자 &#124; 강운철</p>
                                </div>
                            </address>
                            <p class="copyright">Copyright SALTRAIN. All Rights Reserved. Site by wjk</p>
                        </div>
                    </div>
                </v-row>
            </v-footer>
    </div>
    </template>

    <script setup>
        function openPopup(url) {
                const options = 'width=800,height=600,scrollbars=yes,resizable=yes';
                window.open(url, '_blank', options);
        }
    </script>


    <style scoped>
    /* reset */

    .v-main{
        display: none;
      }

    #footer a,#footer p{
        color: #fff;
        font-size: 16px;
    }

    /* common */

    * {
        box-sizing: border-box;
    }

    #footer .v-footer{
        width: 100%;
        padding: 0;
        box-sizing: border-box; 
    }

    .footer_wrap{
        width: 1280px;
        margin: 0 auto;
        padding: 80px 0 120px;
        box-sizing: border-box; 
    }

    .footer_top{
        margin-bottom: 56px;
    }

    .footer_top ul{
        display: flex;
        flex-wrap: wrap;
    }

    .footer_top ul li{
        margin-right: 23px;
    }

   .footer_bottom_bottom{
        display: flex;
    }

    .footer_bottom_top p, .footer_bottom_bottom p{
        margin-right: 23px;
    }

    .footer_wrap a:hover{
        text-decoration: underline;
        cursor:pointer;
    }

    .footer_bottom_address{
        display: flex;
    }
    
    @media (max-width: 768px) {
        #footer .v-footer{ 
            text-align: center;
        }

        #footer a,#footer p{
            color: #fff;
            font-size: 14px;
        }

        .footer_wrap{
            width:480px;
            padding: 80px 0 80px;
        }

        .footer_top{
            margin-bottom: 33px;
            max-width: 480px;
        }

        .footer_top ul{
            display: inline-block;
        }

        .footer_top ul li{
            flex-wrap: nowrap;
            white-space: nowrap;
        }

        .footer_bottom_bottom{
            margin-bottom: 48px;
        }

        .footer_bottom_address,.footer_bottom_bottom{
            display: block;
        }

        .footer_bottom_top p, .footer_bottom_bottom p{
            margin-bottom: 4px;
        }

        .copyright{
            text-align: center;
        } 
    }
    </style>