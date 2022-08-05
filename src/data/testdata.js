export function dataInJs() {
    var testdata = {
        //四图展示区中的核心展示商品图片数组
        guanggaoimg : [
            {
                id: 1,
                src: require('@/assets/img/main-a-img-small/1.jpg')
            }, 
            {
                id: 2,
                src: require('@/assets/img/main-a-img-small/2.jpg')
            },
            {
                id: 3,
                src: require('@/assets/img/main-a-img-small/3.jpg')
            }
        ],
        /* service内容 */            
        service: [
            {
                id: 1,
                name: '保障服务'
            }, 
            {
                id: 2,
                name: '企业团购'
            },
            {
                id: 3,
                name: 'F码通道'
            },
            {
                id: 4,
                name: '米粉卡'
            }, 
            {
                id: 5,
                name: '以旧换新'
            },
            {
                id: 6,
                name: '话费充值'
            }
        ],
        /* 手机商品 */ 
        shouji: [
            {
                /* 首页展示的信息 */
                id: 1,
                leibie: 'shouji',
                path: require('@/assets/img/A/A-1.webp'),
                name: 'K50',
                info: '天玑8100 | 2K直屏 | 5500mAh电量',
                moneyinfo: '',
                money: '',
                /* 商品具体信息*/
                leibiexiliename: 'Redmi K50 系列',
                shoujixiliename: 'Redmi K50 电竞版',
                liangdian: ['天玑8100','144Hz高配LCD屏幕','6400万像素','VC液冷散热'],
                luojijiage: 2199,
                infoIMgsrc: require('@/assets/img/details/RedmiNote11TPro/RedmiNote11TPro.png'),
                xinghao: [
                    {
                        id: 1,
                        name: 'Redmi K50',
                        jiage: 2199,
                    },
                    {
                        id: 2,
                        name: 'Redmi K50 Pro+',
                        jiage: 2499
                    }
                ],
                peizhi: [
                    {
                        id: 1,
                        name: '8GB+128GB',
                        jiage: 200
                    },
                    {
                        id: 2,
                        name: '8GB+256GB',
                        jiage: 400
                    },
                    {
                        id: 3,
                        name: '8GB+512GB',
                        jiage: 600
                    }
                ],
                color: [
                    {
                        id: 1,
                        name: '时光蓝',
                        jiage: 0
                    },
                    {
                        id: 2,
                        name: '子夜黑',
                        jiage: 0
                    },
                    {
                        id: 3,
                        name: '原子银',
                        jiage: 0
                    }
                ],                
                zengpin:[
                    {
                        id: 1,
                        tiaojian: '满1件',
                        zengpinname: '小米胶囊耳机',
                        zengpinjiage: 99,
                        jiezhishijian: '赠完即止'
                    }                    
                ],
                yiwaibaoxian: [
                    {
                        id: 1,
                        name: '意外保障服务',
                        info: '意外损免费修',
                        infodetails: '1年1次意外损坏 官方原厂 免费维修',
                        jiage: 199
                    },
                    {
                        id: 2,
                        name: '碎屏保障服务',
                        info: '碎屏免费修',
                        infodetails: '1年1次碎屏 官方原厂 免费维修',
                        jiage: 129
                    }
                ],
                yanchangbaoxian: [
                    {
                        id: 1,
                        name: '延长保修服务',
                        info: '质保延长一年',
                        infodetails: '性能故障 官方原厂 多次免费维修',
                        jiage: 69
                    }
                ],
                yunserve: [
                    {
                        id: 1,
                        name: '云空间年卡200G',
                        info: '208元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 208
                    },
                    {
                        id: 2,
                        name: '云空间年卡50G',
                        info: '58元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 58
                    },
                    {
                        id: 3,
                        name: '云空间月卡200G',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        info: '21元',
                        jiage: 21
                    },
                    {
                        id: 4,
                        name: '云空间月卡50G',
                        info: '6元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 6
                    }
                ]
            },
            {
                /* 首页展示的信息 */
                id: 2,
                leibie: 'shouji',
                path: require('@/assets/img/A/A-2.webp'),
                name: 'Redmi Note 11T Pro+',
                info: '天玑8100 | 真旗舰芯',
                moneyinfo: '2099元起',
                money: 2099,
                /* 商品具体信息*/
                leibiexiliename: 'Redmi K50 系列',
                shoujixiliename: 'Redmi K50 电竞版',
                liangdian: ['天玑8100','144Hz高配LCD屏幕','6400万像素','VC液冷散热'],
                luojijiage: 1799,
                infoIMgsrc: require('@/assets/img/details/RedmiNote11SE/RedmiNote11SE.png'),
                xinghao: [
                    {
                        id: 1,
                        name: 'Redmi K50',
                        jiage: 2199,
                    },
                    {
                        id: 2,
                        name: 'Redmi K50 Pro+',
                        jiage: 2499
                    }
                ],
                peizhi: [
                    {
                        id: 1,
                        name: '8GB+128GB',
                        jiage: 200
                    },
                    {
                        id: 2,
                        name: '8GB+256GB',
                        jiage: 400
                    },
                    {
                        id: 3,
                        name: '8GB+512GB',
                        jiage: 600
                    }
                ],
                color: [
                    {
                        id: 1,
                        name: '时光蓝',
                        jiage: 0
                    },
                    {
                        id: 2,
                        name: '子夜黑',
                        jiage: 0
                    },
                    {
                        id: 3,
                        name: '原子银',
                        jiage: 0
                    }
                ],                
                zengpin:[
                    {
                        id: 1,
                        tiaojian: '满1件',
                        zengpinname: '小米胶囊耳机',
                        zengpinjiage: 99,
                        jiezhishijian: '赠完即止'
                    }                    
                ],
                yiwaibaoxian: [
                    {
                        id: 1,
                        name: '意外保障服务',
                        info: '意外损免费修',
                        infodetails: '1年1次意外损坏 官方原厂 免费维修',
                        jiage: 199
                    },
                    {
                        id: 2,
                        name: '碎屏保障服务',
                        info: '碎屏免费修',
                        infodetails: '1年1次碎屏 官方原厂 免费维修',
                        jiage: 129
                    }
                ],
                yanchangbaoxian: [
                    {
                        id: 1,
                        name: '延长保修服务',
                        info: '质保延长一年',
                        infodetails: '性能故障 官方原厂 多次免费维修',
                        jiage: 69
                    }
                ],
                yunserve: [
                    {
                        id: 1,
                        name: '云空间年卡200G',
                        info: '208元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 208
                    },
                    {
                        id: 2,
                        name: '云空间年卡50G',
                        info: '58元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 58
                    },
                    {
                        id: 3,
                        name: '云空间月卡200G',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        info: '21元',
                        jiage: 21
                    },
                    {
                        id: 4,
                        name: '云空间月卡50G',
                        info: '6元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 6
                    }
                ]
            },
            {
                /* 首页展示的信息 */
                id: 3,
                leibie: 'shouji',
                path: require('@/assets/img/A/A-3.webp'),
                name: 'Redmi Note 11T Pro',
                info: '天玑8100 | 真旗舰芯',
                moneyinfo: '1799元起',
                money: 1799,
                /* 商品具体信息*/
                leibiexiliename: 'Redmi K50 系列',
                shoujixiliename: 'Redmi K50 电竞版',
                liangdian: ['天玑8100','144Hz高配LCD屏幕','6400万像素','VC液冷散热'],
                luojijiage: 1599,
                infoIMgsrc: require('@/assets/img/details/XiaomiCivi1S/XiaomiCivi1S.png'),
                xinghao: [
                    {
                        id: 1,
                        name: 'Redmi K50',
                        jiage: 2199,
                    },
                    {
                        id: 2,
                        name: 'Redmi K50 Pro+',
                        jiage: 2499
                    }
                ],
                peizhi: [
                    {
                        id: 1,
                        name: '8GB+128GB',
                        jiage: 200
                    },
                    {
                        id: 2,
                        name: '8GB+256GB',
                        jiage: 400
                    },
                    {
                        id: 3,
                        name: '8GB+512GB',
                        jiage: 600
                    }
                ],
                color: [
                    {
                        id: 1,
                        name: '时光蓝',
                        jiage: 0
                    },
                    {
                        id: 2,
                        name: '子夜黑',
                        jiage: 0
                    },
                    {
                        id: 3,
                        name: '原子银',
                        jiage: 0
                    }
                ],                
                zengpin:[
                    {
                        id: 1,
                        tiaojian: '满1件',
                        zengpinname: '小米胶囊耳机',
                        zengpinjiage: 99,
                        jiezhishijian: '赠完即止'
                    }                    
                ],
                yiwaibaoxian: [
                    {
                        id: 1,
                        name: '意外保障服务',
                        info: '意外损免费修',
                        infodetails: '1年1次意外损坏 官方原厂 免费维修',
                        jiage: 199
                    },
                    {
                        id: 2,
                        name: '碎屏保障服务',
                        info: '碎屏免费修',
                        infodetails: '1年1次碎屏 官方原厂 免费维修',
                        jiage: 129
                    }
                ],
                yanchangbaoxian: [
                    {
                        id: 1,
                        name: '延长保修服务',
                        info: '质保延长一年',
                        infodetails: '性能故障 官方原厂 多次免费维修',
                        jiage: 69
                    }
                ],
                yunserve: [
                    {
                        id: 1,
                        name: '云空间年卡200G',
                        info: '208元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 208
                    },
                    {
                        id: 2,
                        name: '云空间年卡50G',
                        info: '58元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 58
                    },
                    {
                        id: 3,
                        name: '云空间月卡200G',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        info: '21元',
                        jiage: 21
                    },
                    {
                        id: 4,
                        name: '云空间月卡50G',
                        info: '6元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 6
                    }
                ]
            },
            {
                /* 首页展示的信息 */
                id: 4,
                leibie: 'shouji',
                path: require('@/assets/img/A/A-4.webp'),
                name: 'Redmi Note 11SE',
                info: '双卡双5G | 极速登录',
                moneyinfo: '1099元起',
                money: 1099,
                /* 商品具体信息*/
                leibiexiliename: 'Redmi K50 系列',
                shoujixiliename: 'Redmi K50 电竞版',
                liangdian: ['天玑8100','144Hz高配LCD屏幕','6400万像素','VC液冷散热'],
                luojijiage: 1399,
                infoIMgsrc: require('@/assets/img/details/RedmiNote11TPro/RedmiNote11TPro.png'),
                xinghao: [
                    {
                        id: 1,
                        name: 'Redmi K50',
                        jiage: 2199,
                    },
                    {
                        id: 2,
                        name: 'Redmi K50 Pro+',
                        jiage: 2499
                    }
                ],
                peizhi: [
                    {
                        id: 1,
                        name: '8GB+128GB',
                        jiage: 200
                    },
                    {
                        id: 2,
                        name: '8GB+256GB',
                        jiage: 400
                    },
                    {
                        id: 3,
                        name: '8GB+512GB',
                        jiage: 600
                    }
                ],
                color: [
                    {
                        id: 1,
                        name: '时光蓝',
                        jiage: 0
                    },
                    {
                        id: 2,
                        name: '子夜黑',
                        jiage: 0
                    },
                    {
                        id: 3,
                        name: '原子银',
                        jiage: 0
                    }
                ],                
                zengpin:[
                    {
                        id: 1,
                        tiaojian: '满1件',
                        zengpinname: '小米胶囊耳机',
                        zengpinjiage: 99,
                        jiezhishijian: '赠完即止'
                    }                    
                ],
                yiwaibaoxian: [
                    {
                        id: 1,
                        name: '意外保障服务',
                        info: '意外损免费修',
                        infodetails: '1年1次意外损坏 官方原厂 免费维修',
                        jiage: 199
                    },
                    {
                        id: 2,
                        name: '碎屏保障服务',
                        info: '碎屏免费修',
                        infodetails: '1年1次碎屏 官方原厂 免费维修',
                        jiage: 129
                    }
                ],
                yanchangbaoxian: [
                    {
                        id: 1,
                        name: '延长保修服务',
                        info: '质保延长一年',
                        infodetails: '性能故障 官方原厂 多次免费维修',
                        jiage: 69
                    }
                ],
                yunserve: [
                    {
                        id: 1,
                        name: '云空间年卡200G',
                        info: '208元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 208
                    },
                    {
                        id: 2,
                        name: '云空间年卡50G',
                        info: '58元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 58
                    },
                    {
                        id: 3,
                        name: '云空间月卡200G',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        info: '21元',
                        jiage: 21
                    },
                    {
                        id: 4,
                        name: '云空间月卡50G',
                        info: '6元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 6
                    }
                ]
            },
            {
                /* 首页展示的信息 */
                id: 5,
                leibie: 'shouji',
                path: require('@/assets/img/A/A-5.webp'),
                name: 'Xiaomi Civi 1S',
                info: '原生美肌人像 | 奇迹阳光动人新色',
                moneyinfo: '2299元起',
                money: 2299,
                /* 商品具体信息*/
                leibiexiliename: 'Redmi K50 系列',
                shoujixiliename: 'Redmi K50 电竞版',
                liangdian: ['天玑8100','144Hz高配LCD屏幕','6400万像素','VC液冷散热'],
                luojijiage: 1199,
                infoIMgsrc: require('@/assets/img/details/RedmiNote11TPro/RedmiNote11TPro.png'),
                xinghao: [
                    {
                        id: 1,
                        name: 'Redmi K50',
                        jiage: 2199,
                    },
                    {
                        id: 2,
                        name: 'Redmi K50 Pro+',
                        jiage: 2499
                    }
                ],
                peizhi: [
                    {
                        id: 1,
                        name: '8GB+128GB',
                        jiage: 200
                    },
                    {
                        id: 2,
                        name: '8GB+256GB',
                        jiage: 400
                    },
                    {
                        id: 3,
                        name: '8GB+512GB',
                        jiage: 600
                    }
                ],
                color: [
                    {
                        id: 1,
                        name: '时光蓝',
                        jiage: 0
                    },
                    {
                        id: 2,
                        name: '子夜黑',
                        jiage: 0
                    },
                    {
                        id: 3,
                        name: '原子银',
                        jiage: 0
                    }
                ],                
                zengpin:[
                    {
                        id: 1,
                        tiaojian: '满1件',
                        zengpinname: '小米胶囊耳机',
                        zengpinjiage: 99,
                        jiezhishijian: '赠完即止'
                    }                    
                ],
                yiwaibaoxian: [
                    {
                        id: 1,
                        name: '意外保障服务',
                        info: '意外损免费修',
                        infodetails: '1年1次意外损坏 官方原厂 免费维修',
                        jiage: 199
                    },
                    {
                        id: 2,
                        name: '碎屏保障服务',
                        info: '碎屏免费修',
                        infodetails: '1年1次碎屏 官方原厂 免费维修',
                        jiage: 129
                    }
                ],
                yanchangbaoxian: [
                    {
                        id: 1,
                        name: '延长保修服务',
                        info: '质保延长一年',
                        infodetails: '性能故障 官方原厂 多次免费维修',
                        jiage: 69
                    }
                ],
                yunserve: [
                    {
                        id: 1,
                        name: '云空间年卡200G',
                        info: '208元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 208
                    },
                    {
                        id: 2,
                        name: '云空间年卡50G',
                        info: '58元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 58
                    },
                    {
                        id: 3,
                        name: '云空间月卡200G',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        info: '21元',
                        jiage: 21
                    },
                    {
                        id: 4,
                        name: '云空间月卡50G',
                        info: '6元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 6
                    }
                ]
            },
            {
                /* 首页展示的信息 */
                id: 6,
                leibie: 'shouji',
                path: require('@/assets/img/A/A-6.webp'),
                name: 'Redmi 10A',
                info: '大电量、大音量、大屏幕',
                moneyinfo: '649元起 旧：699元',
                money: 649,
                /* 商品具体信息*/
                leibiexiliename: 'Redmi K50 系列',
                shoujixiliename: 'Redmi K50 电竞版',
                liangdian: ['天玑8100','144Hz高配LCD屏幕','6400万像素','VC液冷散热'],
                luojijiage: 2599,
                infoIMgsrc: require('@/assets/img/details/RedmiNote11TPro/RedmiNote11TPro.png'),
                xinghao: [
                    {
                        id: 1,
                        name: 'Redmi K50',
                        jiage: 2199,
                    },
                    {
                        id: 2,
                        name: 'Redmi K50 Pro+',
                        jiage: 2499
                    }
                ],
                peizhi: [
                    {
                        id: 1,
                        name: '8GB+128GB',
                        jiage: 200
                    },
                    {
                        id: 2,
                        name: '8GB+256GB',
                        jiage: 400
                    },
                    {
                        id: 3,
                        name: '8GB+512GB',
                        jiage: 600
                    }
                ],
                color: [
                    {
                        id: 1,
                        name: '时光蓝',
                        jiage: 0
                    },
                    {
                        id: 2,
                        name: '子夜黑',
                        jiage: 0
                    },
                    {
                        id: 3,
                        name: '原子银',
                        jiage: 0
                    }
                ],                
                zengpin:[
                    {
                        id: 1,
                        tiaojian: '满1件',
                        zengpinname: '小米胶囊耳机',
                        zengpinjiage: 99,
                        jiezhishijian: '赠完即止'
                    }                    
                ],
                yiwaibaoxian: [
                    {
                        id: 1,
                        name: '意外保障服务',
                        info: '意外损免费修',
                        infodetails: '1年1次意外损坏 官方原厂 免费维修',
                        jiage: 199
                    },
                    {
                        id: 2,
                        name: '碎屏保障服务',
                        info: '碎屏免费修',
                        infodetails: '1年1次碎屏 官方原厂 免费维修',
                        jiage: 129
                    }
                ],
                yanchangbaoxian: [
                    {
                        id: 1,
                        name: '延长保修服务',
                        info: '质保延长一年',
                        infodetails: '性能故障 官方原厂 多次免费维修',
                        jiage: 69
                    }
                ],
                yunserve: [
                    {
                        id: 1,
                        name: '云空间年卡200G',
                        info: '208元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 208
                    },
                    {
                        id: 2,
                        name: '云空间年卡50G',
                        info: '58元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 58
                    },
                    {
                        id: 3,
                        name: '云空间月卡200G',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        info: '21元',
                        jiage: 21
                    },
                    {
                        id: 4,
                        name: '云空间月卡50G',
                        info: '6元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 6
                    }
                ]
            },
            {
                /* 首页展示的信息 */
                id: 7,
                leibie: 'shouji',
                path: require('@/assets/img/A/A-7.webp'),
                name: 'Redmi K50 Pro',
                info: '2K直屏的狠旗舰',
                moneyinfo:'2999元起',
                money: 2999,
                /* 商品具体信息*/
                leibiexiliename: 'Redmi K50 系列',
                shoujixiliename: 'Redmi K50 电竞版',
                liangdian: ['天玑8100','144Hz高配LCD屏幕','6400万像素','VC液冷散热'],
                luojijiage: 2799,
                infoIMgsrc: require('@/assets/img/details/RedmiNote11TPro/RedmiNote11TPro.png'),
                xinghao: [
                    {
                        id: 1,
                        name: 'Redmi K50',
                        jiage: 2199,
                    },
                    {
                        id: 2,
                        name: 'Redmi K50 Pro+',
                        jiage: 2499
                    }
                ],
                peizhi: [
                    {
                        id: 1,
                        name: '8GB+128GB',
                        jiage: 200
                    },
                    {
                        id: 2,
                        name: '8GB+256GB',
                        jiage: 400
                    },
                    {
                        id: 3,
                        name: '8GB+512GB',
                        jiage: 600
                    }
                ],
                color: [
                    {
                        id: 1,
                        name: '时光蓝',
                        jiage: 0
                    },
                    {
                        id: 2,
                        name: '子夜黑',
                        jiage: 0
                    },
                    {
                        id: 3,
                        name: '原子银',
                        jiage: 0
                    }
                ],                
                zengpin:[
                    {
                        id: 1,
                        tiaojian: '满1件',
                        zengpinname: '小米胶囊耳机',
                        zengpinjiage: 99,
                        jiezhishijian: '赠完即止'
                    }                    
                ],
                yiwaibaoxian: [
                    {
                        id: 1,
                        name: '意外保障服务',
                        info: '意外损免费修',
                        infodetails: '1年1次意外损坏 官方原厂 免费维修',
                        jiage: 199
                    },
                    {
                        id: 2,
                        name: '碎屏保障服务',
                        info: '碎屏免费修',
                        infodetails: '1年1次碎屏 官方原厂 免费维修',
                        jiage: 129
                    }
                ],
                yanchangbaoxian: [
                    {
                        id: 1,
                        name: '延长保修服务',
                        info: '质保延长一年',
                        infodetails: '性能故障 官方原厂 多次免费维修',
                        jiage: 69
                    }
                ],
                yunserve: [
                    {
                        id: 1,
                        name: '云空间年卡200G',
                        info: '208元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 208
                    },
                    {
                        id: 2,
                        name: '云空间年卡50G',
                        info: '58元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 58
                    },
                    {
                        id: 3,
                        name: '云空间月卡200G',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        info: '21元',
                        jiage: 21
                    },
                    {
                        id: 4,
                        name: '云空间月卡50G',
                        info: '6元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 6
                    }
                ]
            }, 
            {
                /* 首页展示的信息 */
                id: 8,
                leibie: 'shouji',
                path: require('@/assets/img/A/A-8.webp'),
                name: 'Redmi K50',
                info: '2K直屏的狠旗舰',
                moneyinfo:'2399元起',
                money: 2399,
                /* 商品具体信息*/
                leibiexiliename: 'Redmi K50 系列',
                shoujixiliename: 'Redmi K50 电竞版',
                liangdian: ['天玑8100','144Hz高配LCD屏幕','6400万像素','VC液冷散热'],
                luojijiage: 2199,
                infoIMgsrc: require('@/assets/img/details/RedmiNote11TPro/RedmiNote11TPro.png'),
                xinghao: [
                    {
                        id: 1,
                        name: 'Redmi K50',
                        jiage: 2199,
                    },
                    {
                        id: 2,
                        name: 'Redmi K50 Pro+',
                        jiage: 2499
                    }
                ],
                peizhi: [
                    {
                        id: 1,
                        name: '8GB+128GB',
                        jiage: 200
                    },
                    {
                        id: 2,
                        name: '8GB+256GB',
                        jiage: 400
                    },
                    {
                        id: 3,
                        name: '8GB+512GB',
                        jiage: 600
                    }
                ],
                color: [
                    {
                        id: 1,
                        name: '时光蓝',
                        jiage: 0
                    },
                    {
                        id: 2,
                        name: '子夜黑',
                        jiage: 0
                    },
                    {
                        id: 3,
                        name: '原子银',
                        jiage: 0
                    }
                ],                
                zengpin:[
                    {
                        id: 1,
                        tiaojian: '满1件',
                        zengpinname: '小米胶囊耳机',
                        zengpinjiage: 99,
                        jiezhishijian: '赠完即止'
                    }                    
                ],
                yiwaibaoxian: [
                    {
                        id: 1,
                        name: '意外保障服务',
                        info: '意外损免费修',
                        infodetails: '1年1次意外损坏 官方原厂 免费维修',
                        jiage: 199
                    },
                    {
                        id: 2,
                        name: '碎屏保障服务',
                        info: '碎屏免费修',
                        infodetails: '1年1次碎屏 官方原厂 免费维修',
                        jiage: 129
                    }
                ],
                yanchangbaoxian: [
                    {
                        id: 1,
                        name: '延长保修服务',
                        info: '质保延长一年',
                        infodetails: '性能故障 官方原厂 多次免费维修',
                        jiage: 69
                    }
                ],
                yunserve: [
                    {
                        id: 1,
                        name: '云空间年卡200G',
                        info: '208元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 208
                    },
                    {
                        id: 2,
                        name: '云空间年卡50G',
                        info: '58元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 58
                    },
                    {
                        id: 3,
                        name: '云空间月卡200G',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        info: '21元',
                        jiage: 21
                    },
                    {
                        id: 4,
                        name: '云空间月卡50G',
                        info: '6元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 6
                    }
                ]
            },
            {
                /* 首页展示的信息 */
                id: 9,
                leibie: 'shouji',
                path: require('@/assets/img/A/A-9.webp'),
                name: 'Redmi K40S',
                info: '口碑真旗舰',
                moneyinfo:'1799元起',
                money: 1799,
                /* 商品具体信息*/
                leibiexiliename: 'Redmi K50 系列',
                shoujixiliename: 'Redmi K50 电竞版',
                liangdian: ['天玑8100','144Hz高配LCD屏幕','6400万像素','VC液冷散热'],
                luojijiage: 2199,
                infoIMgsrc: require('@/assets/img/details/RedmiNote11TPro/RedmiNote11TPro.png'),
                xinghao: [
                    {
                        id: 1,
                        name: 'Redmi K50',
                        jiage: 2199,
                    },
                    {
                        id: 2,
                        name: 'Redmi K50 Pro+',
                        jiage: 2499
                    }
                ],
                peizhi: [
                    {
                        id: 1,
                        name: '8GB+128GB',
                        jiage: 200
                    },
                    {
                        id: 2,
                        name: '8GB+256GB',
                        jiage: 400
                    },
                    {
                        id: 3,
                        name: '8GB+512GB',
                        jiage: 600
                    }
                ],
                color: [
                    {
                        id: 1,
                        name: '时光蓝',
                        jiage: 0
                    },
                    {
                        id: 2,
                        name: '子夜黑',
                        jiage: 0
                    },
                    {
                        id: 3,
                        name: '原子银',
                        jiage: 0
                    }
                ],                
                zengpin:[
                    {
                        id: 1,
                        tiaojian: '满1件',
                        zengpinname: '小米胶囊耳机',
                        zengpinjiage: 99,
                        jiezhishijian: '赠完即止'
                    }                    
                ],
                yiwaibaoxian: [
                    {
                        id: 1,
                        name: '意外保障服务',
                        info: '意外损免费修',
                        infodetails: '1年1次意外损坏 官方原厂 免费维修',
                        jiage: 199
                    },
                    {
                        id: 2,
                        name: '碎屏保障服务',
                        info: '碎屏免费修',
                        infodetails: '1年1次碎屏 官方原厂 免费维修',
                        jiage: 129
                    }
                ],
                yanchangbaoxian: [
                    {
                        id: 1,
                        name: '延长保修服务',
                        info: '质保延长一年',
                        infodetails: '性能故障 官方原厂 多次免费维修',
                        jiage: 69
                    }
                ],
                yunserve: [
                    {
                        id: 1,
                        name: '云空间年卡200G',
                        info: '208元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 208
                    },
                    {
                        id: 2,
                        name: '云空间年卡50G',
                        info: '58元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 58
                    },
                    {
                        id: 3,
                        name: '云空间月卡200G',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        info: '21元',
                        jiage: 21
                    },
                    {
                        id: 4,
                        name: '云空间月卡50G',
                        info: '6元',
                        infodetails: '主商品签收后，自动激活至下单帐号',
                        jiage: 6
                    }
                ]
            }
        ]
    };
	return testdata;
}