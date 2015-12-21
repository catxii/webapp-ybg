/*!
 * =====================================================
 * SUI Mobile - http://m.sui.taobao.org/
 *
 * =====================================================
 */
  // console.log($.smConfig.rawCitiesData);
// $.ajax({
//     url:"json/sheng.json",
//     type:"get",
//     success:function(data){
//         var array = [];
//         array = data;
        
//         for(var i=0; i<array.length;i++){
             
//             var urlId = array[i].id;
//             $.ajax({
//                 url:"json/city"+urlId+".json",
//                 type:"get",
//                 success:function(data){

//                     for(var i=0; i<data.length;i++){
//                         array[i].sub = data;
//                         // console.log( JSON.stringify(data) );
//                         // console.log( JSON.stringify($.smConfig.rawCitiesData) );


//                         // for(var i=0; i<array.length;i++){
             
//                         //     var urlId = array[i].id;
//                         //     $.ajax({
//                         //         url:"json/area"+urlId+".json",
//                         //         type:"get",
//                         //         success:function(data){

//                         //             for(var i=0; i<2;i++){
//                         //                 array[i].sub = data;
//                         //                 console.log( JSON.stringify(array) );
//                         //                 // console.log( JSON.stringify(data) );
//                         //                 // console.log( JSON.stringify($.smConfig.rawCitiesData) );
//                         //             }
//                         //         }
//                         //     });
//                         // }

//                         console.log( JSON.stringify(array.sub[0]) );

//                     }
//                 }
//             });
//         }

//     }
// })

// console.log($.smConfig.rawCitiesData);
// jshint ignore: start
$.smConfig.rawCitiesData = [
    {
        "name":"湖南",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"长沙",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"岳麓区"
                    },
                    {
                        "name":"芙蓉区"
                    },
                    {
                        "name":"天心区"
                    },
                    {
                        "name":"开福区"
                    },
                    {
                        "name":"雨花区"
                    },
                    {
                        "name":"浏阳市"
                    },
                    {
                        "name":"长沙县"
                    },
                    {
                        "name":"望城县"
                    },
                    {
                        "name":"宁乡县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"株洲",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"天元区"
                    },
                    {
                        "name":"荷塘区"
                    },
                    {
                        "name":"芦淞区"
                    },
                    {
                        "name":"石峰区"
                    },
                    {
                        "name":"醴陵市"
                    },
                    {
                        "name":"株洲县"
                    },
                    {
                        "name":"炎陵县"
                    },
                    {
                        "name":"茶陵县"
                    },
                    {
                        "name":"攸县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"湘潭",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"岳塘区"
                    },
                    {
                        "name":"雨湖区"
                    },
                    {
                        "name":"湘乡市"
                    },
                    {
                        "name":"韶山市"
                    },
                    {
                        "name":"湘潭县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"衡阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"雁峰区"
                    },
                    {
                        "name":"珠晖区"
                    },
                    {
                        "name":"石鼓区"
                    },
                    {
                        "name":"蒸湘区"
                    },
                    {
                        "name":"南岳区"
                    },
                    {
                        "name":"耒阳市"
                    },
                    {
                        "name":"常宁市"
                    },
                    {
                        "name":"衡阳县"
                    },
                    {
                        "name":"衡东县"
                    },
                    {
                        "name":"衡山县"
                    },
                    {
                        "name":"衡南县"
                    },
                    {
                        "name":"祁东县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"邵阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"双清区"
                    },
                    {
                        "name":"大祥区"
                    },
                    {
                        "name":"北塔区"
                    },
                    {
                        "name":"武冈市"
                    },
                    {
                        "name":"邵东县"
                    },
                    {
                        "name":"洞口县"
                    },
                    {
                        "name":"新邵县"
                    },
                    {
                        "name":"绥宁县"
                    },
                    {
                        "name":"新宁县"
                    },
                    {
                        "name":"邵阳县"
                    },
                    {
                        "name":"隆回县"
                    },
                    {
                        "name":"城步苗族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"岳阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"岳阳楼区"
                    },
                    {
                        "name":"云溪区"
                    },
                    {
                        "name":"君山区"
                    },
                    {
                        "name":"临湘市"
                    },
                    {
                        "name":"汨罗市"
                    },
                    {
                        "name":"岳阳县"
                    },
                    {
                        "name":"湘阴县"
                    },
                    {
                        "name":"平江县"
                    },
                    {
                        "name":"华容县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"常德",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"武陵区"
                    },
                    {
                        "name":"鼎城区"
                    },
                    {
                        "name":"津市市"
                    },
                    {
                        "name":"澧县"
                    },
                    {
                        "name":"临澧县"
                    },
                    {
                        "name":"桃源县"
                    },
                    {
                        "name":"汉寿县"
                    },
                    {
                        "name":"安乡县"
                    },
                    {
                        "name":"石门县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"张家界",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"永定区"
                    },
                    {
                        "name":"武陵源区"
                    },
                    {
                        "name":"慈利县"
                    },
                    {
                        "name":"桑植县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"益阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"赫山区"
                    },
                    {
                        "name":"资阳区"
                    },
                    {
                        "name":"沅江市"
                    },
                    {
                        "name":"桃江县"
                    },
                    {
                        "name":"南县"
                    },
                    {
                        "name":"安化县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"郴州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"北湖区"
                    },
                    {
                        "name":"苏仙区"
                    },
                    {
                        "name":"资兴市"
                    },
                    {
                        "name":"宜章县"
                    },
                    {
                        "name":"汝城县"
                    },
                    {
                        "name":"安仁县"
                    },
                    {
                        "name":"嘉禾县"
                    },
                    {
                        "name":"临武县"
                    },
                    {
                        "name":"桂东县"
                    },
                    {
                        "name":"永兴县"
                    },
                    {
                        "name":"桂阳县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"永州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"冷水滩区"
                    },
                    {
                        "name":"零陵区"
                    },
                    {
                        "name":"祁阳县"
                    },
                    {
                        "name":"蓝山县"
                    },
                    {
                        "name":"宁远县"
                    },
                    {
                        "name":"新田县"
                    },
                    {
                        "name":"东安县"
                    },
                    {
                        "name":"江永县"
                    },
                    {
                        "name":"道县"
                    },
                    {
                        "name":"双牌县"
                    },
                    {
                        "name":"江华瑶族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"怀化",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"鹤城区"
                    },
                    {
                        "name":"洪江市"
                    },
                    {
                        "name":"会同县"
                    },
                    {
                        "name":"沅陵县"
                    },
                    {
                        "name":"辰溪县"
                    },
                    {
                        "name":"溆浦县"
                    },
                    {
                        "name":"中方县"
                    },
                    {
                        "name":"新晃侗族自治县"
                    },
                    {
                        "name":"芷江侗族自治县"
                    },
                    {
                        "name":"通道侗族自治县"
                    },
                    {
                        "name":"靖州苗族侗族自治县"
                    },
                    {
                        "name":"麻阳苗族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"娄底",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"娄星区"
                    },
                    {
                        "name":"冷水江市"
                    },
                    {
                        "name":"涟源市"
                    },
                    {
                        "name":"新化县"
                    },
                    {
                        "name":"双峰县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"湘西土家族苗族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"吉首市"
                    },
                    {
                        "name":"古丈县"
                    },
                    {
                        "name":"龙山县"
                    },
                    {
                        "name":"永顺县"
                    },
                    {
                        "name":"凤凰县"
                    },
                    {
                        "name":"泸溪县"
                    },
                    {
                        "name":"保靖县"
                    },
                    {
                        "name":"花垣县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"湖北",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"武汉",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"江岸区"
                    },
                    {
                        "name":"武昌区"
                    },
                    {
                        "name":"江汉区"
                    },
                    {
                        "name":"硚口区"
                    },
                    {
                        "name":"汉阳区"
                    },
                    {
                        "name":"青山区"
                    },
                    {
                        "name":"洪山区"
                    },
                    {
                        "name":"东西湖区"
                    },
                    {
                        "name":"汉南区"
                    },
                    {
                        "name":"蔡甸区"
                    },
                    {
                        "name":"江夏区"
                    },
                    {
                        "name":"黄陂区"
                    },
                    {
                        "name":"新洲区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"黄石",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"黄石港区"
                    },
                    {
                        "name":"西塞山区"
                    },
                    {
                        "name":"下陆区"
                    },
                    {
                        "name":"铁山区"
                    },
                    {
                        "name":"大冶市"
                    },
                    {
                        "name":"阳新县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"十堰",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"张湾区"
                    },
                    {
                        "name":"茅箭区"
                    },
                    {
                        "name":"丹江口市"
                    },
                    {
                        "name":"郧县"
                    },
                    {
                        "name":"竹山县"
                    },
                    {
                        "name":"房县"
                    },
                    {
                        "name":"郧西县"
                    },
                    {
                        "name":"竹溪县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"荆州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"沙市区"
                    },
                    {
                        "name":"荆州区"
                    },
                    {
                        "name":"洪湖市"
                    },
                    {
                        "name":"石首市"
                    },
                    {
                        "name":"松滋市"
                    },
                    {
                        "name":"监利县"
                    },
                    {
                        "name":"公安县"
                    },
                    {
                        "name":"江陵县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"宜昌",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"西陵区"
                    },
                    {
                        "name":"伍家岗区"
                    },
                    {
                        "name":"点军区"
                    },
                    {
                        "name":"猇亭区"
                    },
                    {
                        "name":"夷陵区"
                    },
                    {
                        "name":"宜都市"
                    },
                    {
                        "name":"当阳市"
                    },
                    {
                        "name":"枝江市"
                    },
                    {
                        "name":"秭归县"
                    },
                    {
                        "name":"远安县"
                    },
                    {
                        "name":"兴山县"
                    },
                    {
                        "name":"五峰土家族自治县"
                    },
                    {
                        "name":"长阳土家族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"襄樊",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"襄城区"
                    },
                    {
                        "name":"樊城区"
                    },
                    {
                        "name":"襄阳区"
                    },
                    {
                        "name":"老河口市"
                    },
                    {
                        "name":"枣阳市"
                    },
                    {
                        "name":"宜城市"
                    },
                    {
                        "name":"南漳县"
                    },
                    {
                        "name":"谷城县"
                    },
                    {
                        "name":"保康县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"鄂州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"鄂城区"
                    },
                    {
                        "name":"华容区"
                    },
                    {
                        "name":"梁子湖区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"荆门",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"东宝区"
                    },
                    {
                        "name":"掇刀区"
                    },
                    {
                        "name":"钟祥市"
                    },
                    {
                        "name":"京山县"
                    },
                    {
                        "name":"沙洋县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"孝感",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"孝南区"
                    },
                    {
                        "name":"应城市"
                    },
                    {
                        "name":"安陆市"
                    },
                    {
                        "name":"汉川市"
                    },
                    {
                        "name":"云梦县"
                    },
                    {
                        "name":"大悟县"
                    },
                    {
                        "name":"孝昌县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"黄冈",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"黄州区"
                    },
                    {
                        "name":"麻城市"
                    },
                    {
                        "name":"武穴市"
                    },
                    {
                        "name":"红安县"
                    },
                    {
                        "name":"罗田县"
                    },
                    {
                        "name":"浠水县"
                    },
                    {
                        "name":"蕲春县"
                    },
                    {
                        "name":"黄梅县"
                    },
                    {
                        "name":"英山县"
                    },
                    {
                        "name":"团风县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"咸宁",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"咸安区"
                    },
                    {
                        "name":"赤壁市"
                    },
                    {
                        "name":"嘉鱼县"
                    },
                    {
                        "name":"通山县"
                    },
                    {
                        "name":"崇阳县"
                    },
                    {
                        "name":"通城县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"随州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"曾都区"
                    },
                    {
                        "name":"广水市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"恩施土家族苗族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"恩施市"
                    },
                    {
                        "name":"利川市"
                    },
                    {
                        "name":"建始县"
                    },
                    {
                        "name":"来凤县"
                    },
                    {
                        "name":"巴东县"
                    },
                    {
                        "name":"鹤峰县"
                    },
                    {
                        "name":"宣恩县"
                    },
                    {
                        "name":"咸丰县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"仙桃",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"天门",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"潜江",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"神农架林区",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    }
];
// jshint ignore: end

/* global Zepto:true */
/* jshint unused:false*/

+ function($) {
  "use strict";


  var format = function(data) {
    var result = [];
    for(var i=0;i<data.length;i++) {
      var d = data[i];
      if(d.name === "请选择") continue;
      result.push(d.name);
    }
    if(result.length) return result;
    return [""];
  };

  var sub = function(data) {
    if(!data.sub) return [""];
    return format(data.sub);
  };

  var getCities = function(d) {
    for(var i=0;i< raw.length;i++) {
      if(raw[i].name === d) return sub(raw[i]);
    }
    return [""];
  };

  var getDistricts = function(p, c) {
    for(var i=0;i< raw.length;i++) {
      if(raw[i].name === p) {
        for(var j=0;j< raw[i].sub.length;j++) {
          if(raw[i].sub[j].name === c) {
            return sub(raw[i].sub[j]);
          }
        }
      }
    }
    return [""];
  };

  var raw = $.smConfig.rawCitiesData;
  var provinces = raw.map(function(d) {
    return d.name;
  });
  var initCities = sub(raw[0]);
  var initDistricts = [""];

  var currentProvince = provinces[0];
  var currentCity = initCities[0];
  var currentDistrict = initDistricts[0];
  
  var defaults = {

    cssClass: "city-picker",
    rotateEffect: false,  //为了性能

    onChange: function (picker, values, displayValues) {
      var newProvince = picker.cols[0].value;
      var newCity;
      if(newProvince !== currentProvince) {
        var newCities = getCities(newProvince);
        newCity = newCities[0];
        var newDistricts = getDistricts(newProvince, newCity);
        picker.cols[1].replaceValues(newCities);
        picker.cols[2].replaceValues(newDistricts);
        currentProvince = newProvince;
        currentCity = newCity;
        picker.updateValue();
        return;
      }
      newCity = picker.cols[1].value;
      if(newCity !== currentCity) {
        picker.cols[2].replaceValues(getDistricts(newProvince, newCity));
        currentCity = newCity;
        picker.updateValue();
      }
    },

    cols: [
      {
        values: provinces,
        cssClass: "col-province"
      },
      {
        values: initCities,
        cssClass: "col-city"
      },
      {
        values: initDistricts,
        cssClass: "col-district"
      }
    ]
  };
   
  $.fn.cityPicker = function(params) {
    return this.each(function() {
      if(!this) return;
      var p = $.extend(defaults, params);
      //计算value
      var val = $(this).val();
      if(val) {
        p.value = val.split(" ");
        if(p.value[0]) {
          p.cols[1].values = getCities(p.value[0]);
        }
        if(p.value[1]) {
          p.cols[2].values = getDistricts(p.value[0], p.value[1]);
        } else {
          p.cols[2].values = getDistricts(p.value[0], p.cols[1].values[0]);
        }
      }
      $(this).picker(p);
    });
  };

}(Zepto);


