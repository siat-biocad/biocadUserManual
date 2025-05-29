import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, b as createStaticVNode, d as createTextVNode, e as createVNode, f as withCtx, o as openBlock } from "./app-wHNjQSIG.js";
const _sfc_main = {};
const _hoisted_1 = ["src"];
const _hoisted_2 = ["href"];
const _hoisted_3 = ["src"];
const _hoisted_4 = ["src"];
const _hoisted_5 = ["href"];
const _hoisted_6 = ["src"];
const _hoisted_7 = ["src"];
const _hoisted_8 = ["href"];
const _hoisted_9 = ["src"];
const _hoisted_10 = ["src"];
const _hoisted_11 = ["href"];
const _hoisted_12 = ["src"];
const _hoisted_13 = ["src"];
const _hoisted_14 = ["href"];
const _hoisted_15 = ["src"];
const _hoisted_16 = ["href"];
const _hoisted_17 = ["src"];
const _hoisted_18 = ["href"];
function _sfc_render(_ctx, _cache) {
  const _component_RouteLink = resolveComponent("RouteLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[208] || (_cache[208] = createBaseVNode("h1", {
      id: "案例介绍",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#案例介绍"
      }, [
        createBaseVNode("span", null, "案例介绍")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createTextVNode("本章节将从7个具体设计案例出发介绍目前装置设计系统支持的组装设计类型，每个案例在装置设计内有对应的模板，用户可以")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B.html#%E4%BB%8E%E6%A8%A1%E7%89%88%E6%96%B0%E5%BB%BA%E8%AE%BE%E8%AE%A1" }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode("从案例模板开始")
        ])),
        _: 1,
        __: [0]
      }),
      _cache[2] || (_cache[2] = createTextVNode("了解软件的功能。"))
    ]),
    _cache[209] || (_cache[209] = createBaseVNode("h2", {
      id: "案例1-简单的gibson组装设计",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#案例1-简单的gibson组装设计"
      }, [
        createBaseVNode("span", null, "案例1：简单的Gibson组装设计")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createTextVNode("下面将介绍如何用装置设计完成一个简单的")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/DNA%E7%BB%84%E8%A3%85%E4%BB%8B%E7%BB%8D.html#slic-gibson-cpec-slice%E7%BB%84%E8%A3%85" }, {
        default: withCtx(() => _cache[3] || (_cache[3] = [
          createTextVNode("SLIC/Gibson/CPEC/SLiCE")
        ])),
        _: 1,
        __: [3]
      }),
      _cache[5] || (_cache[5] = createTextVNode("组装设计。这个例子介绍了如何使用限制酶线性化（消化）载体骨架，如何引入点突变（在本例中是为了去除内部的")),
      _cache[6] || (_cache[6] = createBaseVNode("em", null, "BglBrick", -1)),
      _cache[7] || (_cache[7] = createTextVNode("位点），如何使用预备的SOEing步骤来组装小的DNA片段，然后再进行SLIC/Gibson（CPEC/SLiCE不需要这个预备步骤），以及如何将超短元件（如RBS）嵌入到引物中。"))
    ]),
    _cache[210] || (_cache[210] = createBaseVNode("p", null, "以下是该案例的组装示意图：", -1)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/device-design/images/案例介绍-1-SimpleGibson.png"),
      alt: "案例介绍-1-SimpleGibson"
    }, null, 8, _hoisted_1),
    _cache[211] || (_cache[211] = createStaticVNode("<p>该组装从载体<em>pBbS8c-rfp</em>开始，通过<em>EcoRI/XhoI</em>酶切线性化载体骨架。使用载体<em>pGFPuv_sig.pep</em>作为模板，通过PCR扩增<em>gfpuv_sig.pep</em>编码序列，在此过程中引入两个沉默突变以去除序列内部的<em>XhoI</em>和<em>BamHI</em>位点（<em>BgIBrick</em> sites）。在<em>pBbS8c-rfp</em>载体中的<em>rfp</em>上游发现的核糖体结合位点（RBS）将被合并到<em>gfpuv_sig.pep</em>编码序列的上游（由于此段RBS太短不适合通过PCR制备，故将其嵌入到Forward引物寡核苷酸中）。然后，这些线性化的载体骨架和PCR片段将使用SOE，然后SLIC/Gibson，或者CPEC/SLiCE进行组装，以得到所需的组装产物。请注意，所得到的组装体中没有<em>BglBrick</em>位点（在组装过程中我们不会重新创建<em>EcoRI</em>和<em>XhoI</em>位点），因为我们希望在另一个<em>BglBrick</em>中使用该质粒的大部分（延伸到gfpuv_sig.pep编码序列之外）用于下游构建项目。</p><p><strong>第一步：新建设计并在画布页中编辑定义各组装片段</strong></p>", 2)),
    createBaseVNode("p", null, [
      _cache[8] || (_cache[8] = createTextVNode("新建一个")),
      _cache[9] || (_cache[9] = createBaseVNode("code", null, "Simple/Combinatorial Design", -1)),
      _cache[10] || (_cache[10] = createTextVNode("类型的设计，进入画布页面后，按照下表参数定义各组装元件。（")),
      createBaseVNode("a", {
        href: _ctx.$withBase("/sequences/case1.zip"),
        download: ""
      }, "点击下载case1_seq.zip", 8, _hoisted_2),
      _cache[11] || (_cache[11] = createTextVNode("） /home/lld/gitlab/doculink-center/docs/device-design/public/sequences/case1.zip"))
    ]),
    _cache[212] || (_cache[212] = createStaticVNode('<table><thead><tr><th style="text-align:center;">Part Name</th><th style="text-align:center;">Source File</th><th style="text-align:center;">Reverse Complement?</th><th style="text-align:center;">Start</th><th style="text-align:center;">End</th><th style="text-align:center;">Force Assembly Strategy</th></tr></thead><tbody><tr><td style="text-align:center;">pBbS8c-RFP_backbone</td><td style="text-align:center;">pBbS8c-RFP.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">1934</td><td style="text-align:center;">1215</td><td style="text-align:center;">DIGEST (EcoRI_XhoI)</td></tr><tr><td style="text-align:center;">RBS</td><td style="text-align:center;">pBbS8c-RFP.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">1226</td><td style="text-align:center;">1245</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">gfpuv_sigpep_5prime</td><td style="text-align:center;">pGFPuv_cterm_signal.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">289</td><td style="text-align:center;">713</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">gfpuv_sigpep_XhoI_silent</td><td style="text-align:center;">gfpuv_sigpep_XhoI_.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">gfpuv_sigpep_middle</td><td style="text-align:center;">pGFPuv_cterm_signal.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">715</td><td style="text-align:center;">812</td><td style="text-align:center;">Direct Synthesis</td></tr><tr><td style="text-align:center;">gfpuv_sigpep_BamHI_silent</td><td style="text-align:center;">gfpuv_sigpep_BamHI.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">gfpuv_sigpep_3prime</td><td style="text-align:center;">pGFPuv_cterm_signal.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">814</td><td style="text-align:center;">1072</td><td style="text-align:center;"></td></tr></tbody></table><p>更多关于参数的信息参考其他章节：</p>', 2)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E5%85%83%E4%BB%B6%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF" }, {
          default: withCtx(() => _cache[12] || (_cache[12] = [
            createTextVNode("元件基本信息")
          ])),
          _: 1,
          __: [12]
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#Force-Assembly-Strategy" }, {
          default: withCtx(() => _cache[13] || (_cache[13] = [
            createTextVNode("Force Assembly Strategy")
          ])),
          _: 1,
          __: [13]
        })
      ])
    ]),
    _cache[213] || (_cache[213] = createBaseVNode("p", null, "定义好各组装片段后，画布页布局如下图：", -1)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/device-design/images/案例1-6-整体布局.png"),
      alt: "案例1画布布局图"
    }, null, 8, _hoisted_3),
    _cache[214] || (_cache[214] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第二步：设置组装参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[15] || (_cache[15] = createTextVNode("选择")),
      _cache[16] || (_cache[16] = createBaseVNode("code", null, "Gibson/SLIC/CPEC", -1)),
      _cache[17] || (_cache[17] = createTextVNode("组装方式，并点击")),
      _cache[18] || (_cache[18] = createBaseVNode("code", null, "Set Parameter", -1)),
      _cache[19] || (_cache[19] = createTextVNode("更改组装参数使其更加适用于您的组装工艺。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E7%BB%84%E8%A3%85%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE" }, {
        default: withCtx(() => _cache[14] || (_cache[14] = [
          createTextVNode("组装参数设置")
        ])),
        _: 1,
        __: [14]
      }),
      _cache[20] || (_cache[20] = createTextVNode("）"))
    ]),
    _cache[215] || (_cache[215] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第三步：设置QC参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[22] || (_cache[22] = createTextVNode("此部分是非必须的，用户可根据设计选择一种或多种针对组装产物的质控检验方式。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E8%B4%A8%E9%87%8F%E6%8E%A7%E5%88%B6" }, {
        default: withCtx(() => _cache[21] || (_cache[21] = [
          createTextVNode("质量控制")
        ])),
        _: 1,
        __: [21]
      }),
      _cache[23] || (_cache[23] = createTextVNode("）"))
    ]),
    _cache[216] || (_cache[216] = createStaticVNode("<p><strong>第四步：运行</strong></p><p>点击画布页面右上角绿色<code>运行</code>按钮，等待装置设计系统执行数据分析处理，完成后将在画布页下方<code>运行记录</code>列表中生成组装方案报告等。</p><p><strong>第五步：检查组装方案和结果</strong></p><p>在画布页的<code>运行记录</code>或者<code>报告</code>列表中找到本次设计的组装方案，可下载组装运行方案，预览组装产物序列图谱。</p><p><strong>第六步：提交构建</strong></p>", 5)),
    createBaseVNode("p", null, [
      _cache[25] || (_cache[25] = createTextVNode("确认组装方案可行后，可将此方案")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E8%AF%A6%E7%BB%86%E4%BB%8B%E7%BB%8D.html#%E6%8A%A5%E5%91%8A" }, {
        default: withCtx(() => _cache[24] || (_cache[24] = [
          createTextVNode("提交至下游构建")
        ])),
        _: 1,
        __: [24]
      })
    ]),
    _cache[217] || (_cache[217] = createBaseVNode("h2", {
      id: "案例2-组合的gibson组装设计",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#案例2-组合的gibson组装设计"
      }, [
        createBaseVNode("span", null, "案例2：组合的Gibson组装设计")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      _cache[27] || (_cache[27] = createTextVNode("下面将介绍如何用装置设计完成一个组合类型的")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/DNA%E7%BB%84%E8%A3%85%E4%BB%8B%E7%BB%8D.html#slic-gibson-cpec-slice%E7%BB%84%E8%A3%85" }, {
        default: withCtx(() => _cache[26] || (_cache[26] = [
          createTextVNode("SLIC/Gibson/CPEC/SLiCE")
        ])),
        _: 1,
        __: [26]
      }),
      _cache[28] || (_cache[28] = createTextVNode("组装设计。"))
    ]),
    _cache[218] || (_cache[218] = createBaseVNode("p", null, "以下是该案例的组装示意图：", -1)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/device-design/images/案例介绍-2-CombiGibson.png"),
      alt: "案例介绍-2-CombiGibson"
    }, null, 8, _hoisted_4),
    _cache[219] || (_cache[219] = createStaticVNode("<p>在该的组装设计中，我们希望用<em>gentR</em>、<em>rifR</em>、<em>specR</em>或<em>tetA/tetR</em>替换质粒pJWT00001中的<em>camR</em>抗性基因。我们以质粒pJWT00001作为PCR的模板。我们将通过PCR线性化pJWT00001质粒，并在过程中引入SLIC/Gibson/CPEC/SLiCE重叠序列。类似地，我们将扩增pSGI、pSROI、MAGE-01或pCM62-Prha-T7SL的抗性基因部分（共4个变体）。然后，这五个PCR产物将通过SLIC/Gibson/CPEC/SLiCE方法进行组合装配，最终得到4个质粒变体。</p><p><strong>第一步：新建设计并在画布页中编辑定义各组装片段</strong></p>", 2)),
    createBaseVNode("p", null, [
      _cache[29] || (_cache[29] = createTextVNode("新建一个")),
      _cache[30] || (_cache[30] = createBaseVNode("code", null, "Simple/Combinatorial Design", -1)),
      _cache[31] || (_cache[31] = createTextVNode("类型的设计，进入画布页面后，按照下表参数定义各组装元件。（")),
      createBaseVNode("a", {
        href: _ctx.$withBase("/sequences/case2.zip"),
        download: ""
      }, "点击下载case2_seq.zip", 8, _hoisted_5),
      _cache[32] || (_cache[32] = createTextVNode("）"))
    ]),
    _cache[220] || (_cache[220] = createStaticVNode('<table><thead><tr><th style="text-align:center;">Part Name</th><th style="text-align:center;">Source File</th><th style="text-align:center;">Reverse Complement?</th><th style="text-align:center;">Start</th><th style="text-align:center;">End</th><th style="text-align:center;">Force Assembly Strategy</th></tr></thead><tbody><tr><td style="text-align:center;">vector_backbone</td><td style="text-align:center;">pJWT00001.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">3667</td><td style="text-align:center;">2880</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">GentR</td><td style="text-align:center;">pSGI.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">3427</td><td style="text-align:center;">4251</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">RifR</td><td style="text-align:center;">pSROI.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">3427</td><td style="text-align:center;">4200</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">SpecR</td><td style="text-align:center;">MAGE-010.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">1</td><td style="text-align:center;">1087</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">TetA</td><td style="text-align:center;">pCM62-Prha-T7SL-RFP.gb</td><td style="text-align:center;">TRUE</td><td style="text-align:center;">3966</td><td style="text-align:center;">5936</td><td style="text-align:center;"></td></tr></tbody></table><p><a style="color:red;"><b>注意：</b></a></p><ul><li><p>1）对于最后一个组装片段TetA，由于tetA/tetR位于原始序列pCM62-Prha-T7SL-RFP的负链上，因此被定义为反向互补（reverse complement）。如下图<code>(A)</code>所示。</p></li><li><p>2）同时在此案例中，<code>resistance_cassette</code>列每一个基因将以reverse方向与forward方向的载体连接，如下图<code>(B)</code>所示，在<code>resistance_cassette</code>表头左上角翻转箭头方向，用左箭头（<code>←</code>）表示此列中所有元件在组装时将以reverse方向与临近片段相连接。</p></li><li><p>3）在<code>Simple/Combinatorial Design</code>设计类型中，当画布行数大于1行时，即会被识别为是组合库设计。</p></li></ul>', 3)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/device-design/images/案例2-3-TetA-RC-整体布局.png"),
      alt: "案例2-3-TetA-RC-整体布局"
    }, null, 8, _hoisted_6),
    _cache[221] || (_cache[221] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第二步：设置组装参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[34] || (_cache[34] = createTextVNode("选择")),
      _cache[35] || (_cache[35] = createBaseVNode("code", null, "Gibson/SLIC/CPEC", -1)),
      _cache[36] || (_cache[36] = createTextVNode("组装方式，并点击")),
      _cache[37] || (_cache[37] = createBaseVNode("code", null, "Set Parameter", -1)),
      _cache[38] || (_cache[38] = createTextVNode("更改组装参数使其更加适用于您的组装工艺。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E7%BB%84%E8%A3%85%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE" }, {
        default: withCtx(() => _cache[33] || (_cache[33] = [
          createTextVNode("组装参数设置")
        ])),
        _: 1,
        __: [33]
      }),
      _cache[39] || (_cache[39] = createTextVNode("）"))
    ]),
    _cache[222] || (_cache[222] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第三步：设置QC参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[41] || (_cache[41] = createTextVNode("此部分是非必须的，用户可根据设计选择一种或多种针对组装产物的质控检验方式。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E8%B4%A8%E9%87%8F%E6%8E%A7%E5%88%B6" }, {
        default: withCtx(() => _cache[40] || (_cache[40] = [
          createTextVNode("质量控制")
        ])),
        _: 1,
        __: [40]
      }),
      _cache[42] || (_cache[42] = createTextVNode("）"))
    ]),
    _cache[223] || (_cache[223] = createStaticVNode("<p><strong>第四步：运行</strong></p><p>点击画布页面右上角绿色<code>运行</code>按钮，等待装置设计系统执行数据分析处理，完成后将在画布页下方<code>运行记录</code>列表中生成组装方案报告等。</p><p><strong>第五步：检查组装方案和结果</strong></p><p>在画布页的<code>运行记录</code>或者<code>报告</code>列表中找到本次设计的组装方案，可下载组装运行方案，预览组装产物序列图谱。</p><p><strong>第六步：提交构建</strong></p>", 5)),
    createBaseVNode("p", null, [
      _cache[44] || (_cache[44] = createTextVNode("确认组装方案可行后，可将此方案")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E8%AF%A6%E7%BB%86%E4%BB%8B%E7%BB%8D.html#%E6%8A%A5%E5%91%8A" }, {
        default: withCtx(() => _cache[43] || (_cache[43] = [
          createTextVNode("提交至下游构建")
        ])),
        _: 1,
        __: [43]
      })
    ]),
    _cache[224] || (_cache[224] = createBaseVNode("h2", {
      id: "案例3-简单的goldengate组装设计",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#案例3-简单的goldengate组装设计"
      }, [
        createBaseVNode("span", null, "案例3：简单的GoldenGate组装设计")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      _cache[46] || (_cache[46] = createTextVNode("下面将介绍如何用装置设计完成一个从PCR开始的")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/DNA%E7%BB%84%E8%A3%85%E4%BB%8B%E7%BB%8D.html#%E4%BB%8Epcr%E4%BA%A7%E7%89%A9%E5%BC%80%E5%A7%8B%E7%9A%84%E5%8D%95%E5%B1%82golden-gate%E7%BB%84%E8%A3%85" }, {
        default: withCtx(() => _cache[45] || (_cache[45] = [
          createTextVNode("单层Golden Gate")
        ])),
        _: 1,
        __: [45]
      }),
      _cache[47] || (_cache[47] = createTextVNode("组装设计。"))
    ]),
    _cache[225] || (_cache[225] = createBaseVNode("p", null, "以下是该案例的组装示意图：", -1)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/device-design/images/案例介绍-3-SimpleGoldenGate.png"),
      alt: "案例介绍-3-SimpleGoldenGate"
    }, null, 8, _hoisted_7),
    createBaseVNode("p", null, [
      _cache[50] || (_cache[50] = createTextVNode("在该组装设计中，我们想要将")),
      _cache[51] || (_cache[51] = createBaseVNode("em", null, "UmuD", -1)),
      _cache[52] || (_cache[52] = createTextVNode("的N-末端与一个")),
      _cache[53] || (_cache[53] = createBaseVNode("em", null, "GFP", -1)),
      _cache[54] || (_cache[54] = createTextVNode("变体进行转录融合。与之前的")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E6%A1%88%E4%BE%8B%E4%BB%8B%E7%BB%8D.html#%E6%A1%88%E4%BE%8B1%EF%BC%9A%E7%AE%80%E5%8D%95%E7%9A%84Gibson%E7%BB%84%E8%A3%85%E8%AE%BE%E8%AE%A1" }, {
        default: withCtx(() => _cache[48] || (_cache[48] = [
          createTextVNode("SLIC/Gibson/CPEC/SLiCE示例")
        ])),
        _: 1,
        __: [48]
      }),
      _cache[55] || (_cache[55] = createTextVNode("一样，希望在最终的质粒中不含有")),
      _cache[56] || (_cache[56] = createBaseVNode("em", null, "BglBrick", -1)),
      _cache[57] || (_cache[57] = createTextVNode("限制酶位点（")),
      _cache[58] || (_cache[58] = createBaseVNode("em", null, "EcoRI", -1)),
      _cache[59] || (_cache[59] = createTextVNode("、")),
      _cache[60] || (_cache[60] = createBaseVNode("em", null, "BglII", -1)),
      _cache[61] || (_cache[61] = createTextVNode("、")),
      _cache[62] || (_cache[62] = createBaseVNode("em", null, "BamHI", -1)),
      _cache[63] || (_cache[63] = createTextVNode("和")),
      _cache[64] || (_cache[64] = createBaseVNode("em", null, "XhoI", -1)),
      _cache[65] || (_cache[65] = createTextVNode("）。使用质粒pS8c-gfpuv_sig.pep（这是在之前的")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E6%A1%88%E4%BE%8B%E4%BB%8B%E7%BB%8D.html#%E6%A1%88%E4%BE%8B1%EF%BC%9A%E7%AE%80%E5%8D%95%E7%9A%84Gibson%E7%BB%84%E8%A3%85%E8%AE%BE%E8%AE%A1" }, {
        default: withCtx(() => _cache[49] || (_cache[49] = [
          createTextVNode("SLIC/Gibson/CPEC/SLiCE示例")
        ])),
        _: 1,
        __: [49]
      }),
      _cache[66] || (_cache[66] = createTextVNode("中构建的）和大肠杆菌基因组DNA作为PCR模板，通过PCR线性化pS8c-gfpuv_sig.pep质粒，同时引入")),
      _cache[67] || (_cache[67] = createBaseVNode("em", null, "BsaI", -1)),
      _cache[68] || (_cache[68] = createTextVNode("位点和Golden Gate Overhangs，同样地通过PCR扩增")),
      _cache[69] || (_cache[69] = createBaseVNode("em", null, "umuD", -1)),
      _cache[70] || (_cache[70] = createTextVNode("的5'编码部分。然后，这两个PCR产物将使用Golden Gate方法进行组装。"))
    ]),
    _cache[226] || (_cache[226] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第一步：新建设计并在画布页中编辑定义各组装片段")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[71] || (_cache[71] = createTextVNode("新建一个")),
      _cache[72] || (_cache[72] = createBaseVNode("code", null, "Simple/Combinatorial Design", -1)),
      _cache[73] || (_cache[73] = createTextVNode("类型的设计，进入画布页面后，按照下表参数定义各组装元件。（")),
      createBaseVNode("a", {
        href: _ctx.$withBase("/sequences/case3.zip"),
        download: ""
      }, "点击下载case3_seq.zip", 8, _hoisted_8),
      _cache[74] || (_cache[74] = createTextVNode("）"))
    ]),
    _cache[227] || (_cache[227] = createStaticVNode('<table><thead><tr><th style="text-align:center;">Part Name</th><th style="text-align:center;">Source File</th><th style="text-align:center;">Reverse Complement?</th><th style="text-align:center;">Start</th><th style="text-align:center;">End</th><th style="text-align:center;">Force Assembly Strategy</th></tr></thead><tbody><tr><td style="text-align:center;">pS8c-gfpuv_sig.pep</td><td style="text-align:center;">pj5_000011.gb=</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">1239</td><td style="text-align:center;">1235</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">umuD_tag</td><td style="text-align:center;">umuD_tag_GFPuv.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">1</td><td style="text-align:center;">126</td><td style="text-align:center;"></td></tr></tbody></table><p>定义好各组装片段后，画布页布局如下图：</p>', 2)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/device-design/images/案例3-1-整体布局.png"),
      alt: "案例3画布布局图"
    }, null, 8, _hoisted_9),
    _cache[228] || (_cache[228] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第二步：设置组装参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[76] || (_cache[76] = createTextVNode("选择")),
      _cache[77] || (_cache[77] = createBaseVNode("code", null, "Simple Golden Gate", -1)),
      _cache[78] || (_cache[78] = createTextVNode("组装方式，并点击")),
      _cache[79] || (_cache[79] = createBaseVNode("code", null, "Set Parameter", -1)),
      _cache[80] || (_cache[80] = createTextVNode("更改组装参数使其更加适用于您的组装工艺。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E7%BB%84%E8%A3%85%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE" }, {
        default: withCtx(() => _cache[75] || (_cache[75] = [
          createTextVNode("组装参数设置")
        ])),
        _: 1,
        __: [75]
      }),
      _cache[81] || (_cache[81] = createTextVNode("）"))
    ]),
    _cache[229] || (_cache[229] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第三步：设置QC参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[83] || (_cache[83] = createTextVNode("此部分是非必须的，用户可根据设计选择一种或多种针对组装产物的质控检验方式。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E8%B4%A8%E9%87%8F%E6%8E%A7%E5%88%B6" }, {
        default: withCtx(() => _cache[82] || (_cache[82] = [
          createTextVNode("质量控制")
        ])),
        _: 1,
        __: [82]
      }),
      _cache[84] || (_cache[84] = createTextVNode("）"))
    ]),
    _cache[230] || (_cache[230] = createStaticVNode("<p><strong>第四步：运行</strong></p><p>点击画布页面右上角绿色<code>运行</code>按钮，等待装置设计系统执行数据分析处理，完成后将在画布页下方<code>运行记录</code>列表中生成组装方案报告等。</p><p><strong>第五步：检查组装方案和结果</strong></p><p>在画布页的<code>运行记录</code>或者<code>报告</code>列表中找到本次设计的组装方案，可下载组装运行方案，预览组装产物序列图谱。</p><p><strong>第六步：提交构建</strong></p>", 5)),
    createBaseVNode("p", null, [
      _cache[86] || (_cache[86] = createTextVNode("确认组装方案可行后，可将此方案")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E8%AF%A6%E7%BB%86%E4%BB%8B%E7%BB%8D.html#%E6%8A%A5%E5%91%8A" }, {
        default: withCtx(() => _cache[85] || (_cache[85] = [
          createTextVNode("提交至下游构建")
        ])),
        _: 1,
        __: [85]
      })
    ]),
    _cache[231] || (_cache[231] = createBaseVNode("h2", {
      id: "案例4-组合的goldengate组装设计",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#案例4-组合的goldengate组装设计"
      }, [
        createBaseVNode("span", null, "案例4：组合的GoldenGate组装设计")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      _cache[88] || (_cache[88] = createTextVNode("下面将介绍如何用装置设计完成一个从PCR开始的组合类型的")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/DNA%E7%BB%84%E8%A3%85%E4%BB%8B%E7%BB%8D.html#%E4%BB%8Epcr%E4%BA%A7%E7%89%A9%E5%BC%80%E5%A7%8B%E7%9A%84golden-gate%E7%BB%84%E8%A3%85" }, {
        default: withCtx(() => _cache[87] || (_cache[87] = [
          createTextVNode("Golden Gate")
        ])),
        _: 1,
        __: [87]
      }),
      _cache[89] || (_cache[89] = createTextVNode("组装设计。"))
    ]),
    _cache[232] || (_cache[232] = createBaseVNode("p", null, "以下是该案例的组装示意图：", -1)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/device-design/images/案例介绍-4-CombiGoldenGate.png"),
      alt: "案例介绍-4-CombiGoldenGate"
    }, null, 8, _hoisted_10),
    createBaseVNode("p", null, [
      _cache[92] || (_cache[92] = createTextVNode("在该组合库组装设计中，我们希望将两种信号肽（BMC和")),
      _cache[93] || (_cache[93] = createBaseVNode("em", null, "ccmN", -1)),
      _cache[94] || (_cache[94] = createTextVNode("）之一与两种连接子（long和short）融合到一个GFP变体之后，再加上两种")),
      _cache[95] || (_cache[95] = createBaseVNode("em", null, "ssrA", -1)),
      _cache[96] || (_cache[96] = createTextVNode("降解标签（standard和enhanced）。与之前的")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E6%A1%88%E4%BE%8B%E4%BB%8B%E7%BB%8D.html#%E6%A1%88%E4%BE%8B1%EF%BC%9A%E7%AE%80%E5%8D%95%E7%9A%84Gibson%E7%BB%84%E8%A3%85%E8%AE%BE%E8%AE%A1" }, {
        default: withCtx(() => _cache[90] || (_cache[90] = [
          createTextVNode("SLIC/Gibson/CPEC/SLiCE示例")
        ])),
        _: 1,
        __: [90]
      }),
      _cache[97] || (_cache[97] = createTextVNode("一样，我们希望在得到的质粒中没有")),
      _cache[98] || (_cache[98] = createBaseVNode("em", null, "BglBrick", -1)),
      _cache[99] || (_cache[99] = createTextVNode("限制酶切位点（")),
      _cache[100] || (_cache[100] = createBaseVNode("em", null, "EcoRI", -1)),
      _cache[101] || (_cache[101] = createTextVNode("、")),
      _cache[102] || (_cache[102] = createBaseVNode("em", null, "BglII", -1)),
      _cache[103] || (_cache[103] = createTextVNode("、")),
      _cache[104] || (_cache[104] = createBaseVNode("em", null, "BamHI", -1)),
      _cache[105] || (_cache[105] = createTextVNode("和")),
      _cache[106] || (_cache[106] = createBaseVNode("em", null, "XhoI", -1)),
      _cache[107] || (_cache[107] = createTextVNode("）。我们以pS8c-gfpuv_sig.pep质粒（在之前的")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E6%A1%88%E4%BE%8B%E4%BB%8B%E7%BB%8D.html#%E6%A1%88%E4%BE%8B1%EF%BC%9A%E7%AE%80%E5%8D%95%E7%9A%84Gibson%E7%BB%84%E8%A3%85%E8%AE%BE%E8%AE%A1" }, {
        default: withCtx(() => _cache[91] || (_cache[91] = [
          createTextVNode("SLIC/Gibson/CPEC/SLiCE示例")
        ])),
        _: 1,
        __: [91]
      }),
      _cache[108] || (_cache[108] = createTextVNode("中构建）作为PCR模板，通过PCR线性化pS8c-gfpuv_sig.pep质粒，同时引入信号肽（两个变体）和")),
      _cache[109] || (_cache[109] = createBaseVNode("em", null, "ssrA", -1)),
      _cache[110] || (_cache[110] = createTextVNode("标签的保守3'端，以及")),
      _cache[111] || (_cache[111] = createBaseVNode("em", null, "BsaI", -1)),
      _cache[112] || (_cache[112] = createTextVNode("位点和Golden Gate Overhang。类似地，我们将扩增gfpuv_sig.pep的")),
      _cache[113] || (_cache[113] = createBaseVNode("em", null, "gfpuv", -1)),
      _cache[114] || (_cache[114] = createTextVNode("部分，这次引入连接子和")),
      _cache[115] || (_cache[115] = createBaseVNode("em", null, "ssrA", -1)),
      _cache[116] || (_cache[116] = createTextVNode("标签的5'端（总共4个变体）。然后，这六个PCR产物将通过Golden Gate方法组合装配，得到总共8个质粒变体。值得注意的是，两个")),
      _cache[117] || (_cache[117] = createBaseVNode("em", null, "ssrA", -1)),
      _cache[118] || (_cache[118] = createTextVNode("降解标签变体被有意地分成可变的5'区域和保守的3'区域，以便我们在正向（质粒骨架扩增）和反向（")),
      _cache[119] || (_cache[119] = createBaseVNode("em", null, "gfpuv", -1)),
      _cache[120] || (_cache[120] = createTextVNode("扩增）引物之间共享寡核苷酸。"))
    ]),
    _cache[233] || (_cache[233] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第一步：新建设计并在画布页中编辑定义各组装片段")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[121] || (_cache[121] = createTextVNode("新建一个")),
      _cache[122] || (_cache[122] = createBaseVNode("code", null, "Simple/Combinatorial Design", -1)),
      _cache[123] || (_cache[123] = createTextVNode("类型的设计，进入画布页面后，按照下表参数定义各组装元件。（")),
      createBaseVNode("a", {
        href: _ctx.$withBase("/sequences/case4.zip"),
        download: ""
      }, "点击下载case4_seq.zip", 8, _hoisted_11),
      _cache[124] || (_cache[124] = createTextVNode("）"))
    ]),
    _cache[234] || (_cache[234] = createStaticVNode('<table><thead><tr><th style="text-align:center;">Part Name</th><th style="text-align:center;">Source File</th><th style="text-align:center;">Reverse Complement?</th><th style="text-align:center;">Start</th><th style="text-align:center;">End</th><th style="text-align:center;">Force Assembly Strategy</th></tr></thead><tbody><tr><td style="text-align:center;">pS8c-vector_backbone</td><td style="text-align:center;">pj5_000012.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">2016</td><td style="text-align:center;">1238</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">BMC_nterm_sig_pep</td><td style="text-align:center;">BMC_nterm_sig_pep_GFP.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">4</td><td style="text-align:center;">54</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">ccmN_nterm_sig_pep</td><td style="text-align:center;">ccmN_nterm_sig_pep_GF.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">4</td><td style="text-align:center;">60</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">short_gly_ser_linker</td><td style="text-align:center;">BMC_nterm_sig_pep_GFP.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">55</td><td style="text-align:center;">78</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">long_gly_ser_linker</td><td style="text-align:center;">BMC_nterm_sig_pep_GFP.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">55</td><td style="text-align:center;">102</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">GFPuv</td><td style="text-align:center;">pj5_000012.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">1242</td><td style="text-align:center;">1952</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">ssrA_tag_5prime</td><td style="text-align:center;">ssrA_tag_GFPuv.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">1</td><td style="text-align:center;">15</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">ssrA_tag_enhanced_5prime</td><td style="text-align:center;">ssrA_tag_enhanced_GFP.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">1</td><td style="text-align:center;">21</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">ssrA_tag_3prime</td><td style="text-align:center;">ssrA_tag_GFPuv.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">16</td><td style="text-align:center;">33</td><td style="text-align:center;"></td></tr></tbody></table><p>定义好各组装片段后，画布页布局如下图：</p>', 2)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/device-design/images/案例4-1-整体布局.png"),
      alt: "案例4画布布局图"
    }, null, 8, _hoisted_12),
    _cache[235] || (_cache[235] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第二步：设置组装参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[126] || (_cache[126] = createTextVNode("选择")),
      _cache[127] || (_cache[127] = createBaseVNode("code", null, "Simple Golden Gate", -1)),
      _cache[128] || (_cache[128] = createTextVNode("组装方式，并点击")),
      _cache[129] || (_cache[129] = createBaseVNode("code", null, "Set Parameter", -1)),
      _cache[130] || (_cache[130] = createTextVNode("更改组装参数使其更加适用于您的组装工艺。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E7%BB%84%E8%A3%85%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE" }, {
        default: withCtx(() => _cache[125] || (_cache[125] = [
          createTextVNode("组装参数设置")
        ])),
        _: 1,
        __: [125]
      }),
      _cache[131] || (_cache[131] = createTextVNode("）"))
    ]),
    _cache[236] || (_cache[236] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第三步：设置QC参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[133] || (_cache[133] = createTextVNode("此部分是非必须的，用户可根据设计选择一种或多种针对组装产物的质控检验方式。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E8%B4%A8%E9%87%8F%E6%8E%A7%E5%88%B6" }, {
        default: withCtx(() => _cache[132] || (_cache[132] = [
          createTextVNode("质量控制")
        ])),
        _: 1,
        __: [132]
      }),
      _cache[134] || (_cache[134] = createTextVNode("）"))
    ]),
    _cache[237] || (_cache[237] = createStaticVNode("<p><strong>第四步：运行</strong></p><p>点击画布页面右上角绿色<code>运行</code>按钮，等待装置设计系统执行数据分析处理，完成后将在画布页下方<code>运行记录</code>列表中生成组装方案报告等。</p><p><strong>第五步：检查组装方案和结果</strong></p><p>在画布页的<code>运行记录</code>或者<code>报告</code>列表中找到本次设计的组装方案，可下载组装运行方案，预览组装产物序列图谱。</p><p><strong>第六步：提交构建</strong></p>", 5)),
    createBaseVNode("p", null, [
      _cache[136] || (_cache[136] = createTextVNode("确认组装方案可行后，可将此方案")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E8%AF%A6%E7%BB%86%E4%BB%8B%E7%BB%8D.html#%E6%8A%A5%E5%91%8A" }, {
        default: withCtx(() => _cache[135] || (_cache[135] = [
          createTextVNode("提交至下游构建")
        ])),
        _: 1,
        __: [135]
      })
    ]),
    _cache[238] || (_cache[238] = createBaseVNode("h2", {
      id: "案例5-从携带typeii酶的未切割序列开始的多层级goldengate组装设计",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#案例5-从携带typeii酶的未切割序列开始的多层级goldengate组装设计"
      }, [
        createBaseVNode("span", null, "案例5：从携带TypeII酶的未切割序列开始的多层级GoldenGate组装设计")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      _cache[138] || (_cache[138] = createTextVNode("下面将介绍如何用装置设计完成一个")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/DNA%E7%BB%84%E8%A3%85%E4%BB%8B%E7%BB%8D.html#%E4%BB%8E%E6%9C%AA%E5%88%87%E5%89%B2%E7%9A%84%E5%BA%8F%E5%88%97%E5%BC%80%E5%A7%8B%E7%9A%84%E5%A4%9A%E5%B1%82%E7%BA%A7golden-gate%E7%BB%84%E8%A3%85" }, {
        default: withCtx(() => _cache[137] || (_cache[137] = [
          createTextVNode("从携带TypeII酶的未切割序列开始的多层级GoldenGate组装设计")
        ])),
        _: 1,
        __: [137]
      }),
      _cache[139] || (_cache[139] = createTextVNode("组装设计。"))
    ]),
    _cache[239] || (_cache[239] = createBaseVNode("p", null, "以下是该案例的组装示意图：", -1)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/device-design/images/案例介绍-5-3LevelHGGA.png"),
      alt: "案例介绍-5-HGGA"
    }, null, 8, _hoisted_13),
    _cache[240] || (_cache[240] = createStaticVNode('<p>在此案例中，我们交替使用<a style="color:#e482d4;">BpiI</a>和<a style="color:#b66a6a;">BsaI</a>两种酶将标准化的载体与标准化元件通过Golden Gate反应逐步组装成带有两个TU（Transcript Unit）的终产物。图中我们分别用对应颜色的虚线表示<a style="color:#e482d4;">BpiI</a> 或 <a style="color:#b66a6a;">BsaI</a> Golden Gate反应；并用不同颜色背景标出酶切黏末端，包括：<a style="color:#ffffff;background-color:#a287e1;">TTTT</a>、<a style="color:#ffffff;background-color:#e3c5db;">AATG</a>、<a style="color:#ffffff;background-color:#6ec4c4;">TAAA</a>、<a style="color:#ffffff;background-color:#dfb85d;">CCTC</a>、<a style="color:#ffffff;background-color:#77c386;">GCTT</a>、<a style="color:#ffffff;background-color:#69b1e4;">CTGA</a>、<a style="color:#ffffff;background-color:#e48484;">TACG</a>。</p><p>整个构建的主要步骤包括：</p><ul><li><p>1）Cassette Module准备：一般地，第一步是给各种DNA功能片段（Promoter、ORF、Terminator等）设计带有<code>BpiI</code>的引物，使不同DNA片段的扩增产物在<code>BpiI</code>酶切后产生不同overhangs，以便在后续Golden Gate反应进行后续组装。但是本案例中<code>P1</code>、<code>orf1</code>、<code>T49</code>上已经存在了<code>BpiI</code>位点。故可以跳过该步骤。</p></li><li><p>2）Level 0 Module构建：Level 0 backbone上的<em>ccdb</em>区域两端分别有一对<code>BpiI</code>和<code>BsaI</code>酶切位点，<code>BpiI</code>在<code>BsaI</code>的5&#39;远端，两个酶切位点产生同样的4-bp黏末端。根据酶切产生的黏末端种类，不同DNA片段<code>P1</code>、<code>orf1</code>、<code>T49</code>分别与不同的Level 0 backbone <code>AB</code>、<code>BC</code>、<code>CD</code>进行<code>BpiI</code> Golden Gate反应，生成一系列Level 0产物（L0_P1、L0_orf1、L0_T49）。Level 0环形载体产物上还保留了一对<code>BsaI</code>酶切位点用以后续反应。</p></li><li><p>3）Level 1 Module构建：上述Level 0环形载体产物（L0_P1、L0_orf1、L0_T49），加上原本输入序列中的3个环形序列P36、orf3和T50，将与Level 1 backbone（Level 1 backbone上的<em>ccdb</em>区域两端分别有一对<code>BpiI</code>和<code>BsaI</code>酶切位点，<code>BsaI</code>在<code>BpiI</code>的5&#39;远端，两个酶切位点产生同样的4-bp黏末端）进行<code>BsaI</code> Golden Gate反应，生成L1_TU1和L1_TU2。Level 1环形载体产物上还保留了一对<code>BpiI</code>酶切位点用以后续反应。</p></li><li><p>4）Level 2 Module构建：上述两个TU产物与Level 2 backbone（Level 2 backbone上的<em>ccdb</em>区域两端仅有一对<code>BpiI</code>酶切位点）进行<code>BpiI</code> Golden Gate反应，生成最终的两基因产物。</p></li></ul><p><strong>第一步：新建设计并在画布页中编辑定义各组装片段</strong></p>', 4)),
    createBaseVNode("p", null, [
      _cache[140] || (_cache[140] = createTextVNode("新建一个")),
      _cache[141] || (_cache[141] = createBaseVNode("code", null, "Golde Gate Hierarchical Design (With Enzyme Site)", -1)),
      _cache[142] || (_cache[142] = createTextVNode("类型的设计，进入画布页面后，按照下表参数定义各组装元件。（")),
      createBaseVNode("a", {
        href: _ctx.$withBase("/sequences/case5.zip"),
        download: ""
      }, "点击下载case5_seq.zip", 8, _hoisted_14),
      _cache[143] || (_cache[143] = createTextVNode("）"))
    ]),
    _cache[241] || (_cache[241] = createBaseVNode("p", null, "| Bin Name | Part Name | Source File | Reverse Complement? | Selection Marker | BpiI (e1) |e1_ovh_L|e1_ovh_R| BsaI (e2) | e2_ovh_L | e2_ovh_R | Topology | | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | | Level 0 Backbone | AB | AB.gb | FALSE|Ampicillin |√| TTTT | AATG | √ |TTTT | AATG |circular| | Level 0 Backbone | BC | BC.gb| FALSE|Ampicillin |√|× | AATG | TAAA |√ | AATG | TAAA |circular| | Level 0 Backbone | CD | CD.gb | FALSE|Ampicillin |√|× | TAAA | CCTC |√ | TAAA | CCTC |circular| | Level 1 Backbone | cy572 | CY572-int-Rsub1b.gb | FALSE|Ampicillin |√|GCTT| CTGA|√ | TTTT | CCTC |circular| | Level 1 Backbone | cy573 | CY573-int-Rsub2b.gb | FALSE|Ampicillin |√|CTGA|ATCG|√ | TTTT | CCTC |circular| | Level 2 Backbone | cy1802 | CY1802.gb | FALSE|Ampicillin |√|GCTT | TACG |× |-|-|circular| | Promoter | P1 | P1.gb | FALSE|- |√| TTTT | AATG |× |-|-|linear| | Promoter | P36 | P36.gb | FALSE|- |×|-|-|√ | TTTT | AATG |circular| | ORF | orf1 | orf1.gb | FALSE|- |√| AATG | TAAA |× |-|-|linear| | ORF | orf3 | orf3.gb | FALSE|- |×|-|-|√ | AATG | TAAA |circular| | Terminator | T49 | T49.gb | FALSE|- |√| TAAA | CCTC |×|-|-|linear| | Terminator | T50 | T50.gb | FALSE|- |×|-|-|√| TAAA | CCTC |circular|", -1)),
    _cache[242] || (_cache[242] = createBaseVNode("p", null, "定义好各组装片段后，画布页布局如下图：", -1)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/device-design/images/案例5-1-整体布局.png"),
      alt: "案例5画布布局图"
    }, null, 8, _hoisted_15),
    _cache[243] || (_cache[243] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第二步：设置组装参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[145] || (_cache[145] = createTextVNode("选择")),
      _cache[146] || (_cache[146] = createBaseVNode("code", null, "Simple Golden Gate", -1)),
      _cache[147] || (_cache[147] = createTextVNode("组装方式，并点击")),
      _cache[148] || (_cache[148] = createBaseVNode("code", null, "Set Parameter", -1)),
      _cache[149] || (_cache[149] = createTextVNode("更改组装参数使其更加适用于您的组装工艺。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E7%BB%84%E8%A3%85%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE" }, {
        default: withCtx(() => _cache[144] || (_cache[144] = [
          createTextVNode("组装参数设置")
        ])),
        _: 1,
        __: [144]
      }),
      _cache[150] || (_cache[150] = createTextVNode("）"))
    ]),
    _cache[244] || (_cache[244] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第三步：设置QC参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[152] || (_cache[152] = createTextVNode("此部分是非必须的，用户可根据设计选择一种或多种针对组装产物的质控检验方式。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E8%B4%A8%E9%87%8F%E6%8E%A7%E5%88%B6" }, {
        default: withCtx(() => _cache[151] || (_cache[151] = [
          createTextVNode("质量控制")
        ])),
        _: 1,
        __: [151]
      }),
      _cache[153] || (_cache[153] = createTextVNode("）"))
    ]),
    _cache[245] || (_cache[245] = createStaticVNode("<p><strong>第四步：运行</strong></p><p>点击画布页面右上角绿色<code>运行</code>按钮，等待装置设计系统执行数据分析处理，完成后将在画布页下方<code>运行记录</code>列表中生成组装方案报告等。</p><p><strong>第五步：检查组装方案和结果</strong></p><p>在画布页的<code>运行记录</code>或者<code>报告</code>列表中找到本次设计的组装方案，可下载组装运行方案，预览组装产物序列图谱。</p><p><strong>第六步：提交构建</strong></p>", 5)),
    createBaseVNode("p", null, [
      _cache[155] || (_cache[155] = createTextVNode("确认组装方案可行后，可将此方案")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E8%AF%A6%E7%BB%86%E4%BB%8B%E7%BB%8D.html#%E6%8A%A5%E5%91%8A" }, {
        default: withCtx(() => _cache[154] || (_cache[154] = [
          createTextVNode("提交至下游构建")
        ])),
        _: 1,
        __: [154]
      })
    ]),
    _cache[246] || (_cache[246] = createBaseVNode("h2", {
      id: "案例6-从pcr开始设计的多层级goldengate组装设计",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#案例6-从pcr开始设计的多层级goldengate组装设计"
      }, [
        createBaseVNode("span", null, "案例6：从PCR开始设计的多层级GoldenGate组装设计")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      _cache[157] || (_cache[157] = createTextVNode("下面将介绍如何用装置设计完成一个")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/DNA%E7%BB%84%E8%A3%85%E4%BB%8B%E7%BB%8D.html#%E4%BB%8Epcr%E5%BC%80%E5%A7%8B%E8%AE%BE%E8%AE%A1%E7%9A%84%E5%A4%9A%E5%B1%82%E7%BA%A7goldengate%E7%BB%84%E8%A3%85%E8%AE%BE%E8%AE%A1" }, {
        default: withCtx(() => _cache[156] || (_cache[156] = [
          createTextVNode("从PCR开始设计的多层级GoldenGate组装设计")
        ])),
        _: 1,
        __: [156]
      }),
      _cache[158] || (_cache[158] = createTextVNode("，在此种类型的设计中，我们仅输出前两步的结果："))
    ]),
    _cache[247] || (_cache[247] = createStaticVNode("<ul><li>1）给不同类型的原始DNA序列设计引物以引入<code>BsmBI</code>和<code>BsaI</code>位点，并为不同类型的元件设计<code>BsaI</code>酶切黏末端；</li><li>2）上述各类型元件的PCR产物与<em>Entry Vector</em>进行<code>BsmBI</code> Golden Gate反应生成Level 0 Part Plasmids。</li></ul><p><strong>第一步：新建设计并在画布页中编辑定义各组装片段</strong></p>", 2)),
    createBaseVNode("p", null, [
      _cache[159] || (_cache[159] = createTextVNode("新建一个")),
      _cache[160] || (_cache[160] = createBaseVNode("code", null, "Golde Gate Hierarchical Design (Without Enzyme Site)", -1)),
      _cache[161] || (_cache[161] = createTextVNode("类型的设计，进入画布页面后，按照下表参数定义各组装元件（")),
      createBaseVNode("a", {
        href: _ctx.$withBase("/sequences/case6.zip"),
        download: ""
      }, "点击下载case6_seq.zip", 8, _hoisted_16),
      _cache[162] || (_cache[162] = createTextVNode("）。其中Type1和Type5的元件属于")),
      _cache[163] || (_cache[163] = createBaseVNode("code", null, "Connector", -1)),
      _cache[164] || (_cache[164] = createTextVNode("类型的元件，在装置设计中，可以在右侧")),
      _cache[165] || (_cache[165] = createBaseVNode("code", null, "列详情", -1)),
      _cache[166] || (_cache[166] = createTextVNode("的参数中，将")),
      _cache[167] || (_cache[167] = createBaseVNode("code", null, "Is Connctor", -1)),
      _cache[168] || (_cache[168] = createTextVNode("勾选中。以此保护Type1和Type5元件在形成part plasmid步骤时，序列中间的")),
      _cache[169] || (_cache[169] = createBaseVNode("code", null, "BsmBI", -1)),
      _cache[170] || (_cache[170] = createTextVNode("位点不被消化。"))
    ]),
    _cache[248] || (_cache[248] = createStaticVNode('<table><thead><tr><th style="text-align:center;">Bin Name</th><th style="text-align:center;">Part Name</th><th style="text-align:center;">Source File</th><th style="text-align:center;">Reverse Complement?</th><th style="text-align:center;">Selection Marker</th><th style="text-align:center;">BsmBI (e1)</th><th style="text-align:center;">BsaI (e2)</th></tr></thead><tbody><tr><td style="text-align:center;">Level 0 Backbone</td><td style="text-align:center;">Entry_Vector</td><td style="text-align:center;">EntryVector.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">Carbenicillin</td><td style="text-align:center;">√</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type1</td><td style="text-align:center;">ConLS</td><td style="text-align:center;">Type-1-ConLS.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type1</td><td style="text-align:center;">ConL1</td><td style="text-align:center;">Type-1-ConL1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type1</td><td style="text-align:center;">ConL2</td><td style="text-align:center;">Type-1-ConL2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type1</td><td style="text-align:center;">ConL3</td><td style="text-align:center;">Type-1-ConL3.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type1</td><td style="text-align:center;">ConL4</td><td style="text-align:center;">Type-1-ConL4.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type1</td><td style="text-align:center;">ConL5</td><td style="text-align:center;">Type-1-ConL5.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type1</td><td style="text-align:center;">ConLS&#39;</td><td style="text-align:center;">Type-1-ConLSpre.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pTDH3</td><td style="text-align:center;">Type-2-pTDH3.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pCCW12</td><td style="text-align:center;">Type-2-pCCW12.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pPGK1</td><td style="text-align:center;">Type-2-pPGK1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pHHF2</td><td style="text-align:center;">Type-2-pHHF2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pTEF1</td><td style="text-align:center;">Type-2-pTEF1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pTEF2</td><td style="text-align:center;">Type-2-pTEF2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pHHF1</td><td style="text-align:center;">Type-2-pHHF1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pHTB2</td><td style="text-align:center;">Type-2-pHTB2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pRPL18B</td><td style="text-align:center;">Type-2-pRPL18B.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pALD6</td><td style="text-align:center;">Type-2-pALD6.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pPAB1</td><td style="text-align:center;">Type-2-pPAB1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pRET2</td><td style="text-align:center;">Type-2-pRET2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pRNR1</td><td style="text-align:center;">Type-2-pRNR1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pSAC6</td><td style="text-align:center;">Type-2-pSAC6.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pRNR2</td><td style="text-align:center;">Type-2-pRNR2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pPOP6</td><td style="text-align:center;">Type-2-pPOP6.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pRAD27</td><td style="text-align:center;">Type-2-pRAD27.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pPSP2</td><td style="text-align:center;">Type-2-pPSP2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pREV1</td><td style="text-align:center;">Type-2-pREV1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pMFA1</td><td style="text-align:center;">Type-2-pMFA1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pMFα2</td><td style="text-align:center;">Type-2-pMFα2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pGAL1</td><td style="text-align:center;">Type-2-pGAL1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type2</td><td style="text-align:center;">pCUP1</td><td style="text-align:center;">Type-2-pCUP1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3A</td><td style="text-align:center;">mTurquoise2</td><td style="text-align:center;">Type-3a-mTurquoise2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3A</td><td style="text-align:center;">Venus</td><td style="text-align:center;">Type-3a-Venus.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3A</td><td style="text-align:center;">mRuby2</td><td style="text-align:center;">Type-3a-mRuby2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3A</td><td style="text-align:center;">3XFLAG-6XHis</td><td style="text-align:center;">Type-3a-3XFLAG-6XHis.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3A</td><td style="text-align:center;">Ubi-M</td><td style="text-align:center;">Type-3a-Ubi-M.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3A</td><td style="text-align:center;">Ubi-Y</td><td style="text-align:center;">Type-3a-Ubi-Y.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3A</td><td style="text-align:center;">Ubi-R</td><td style="text-align:center;">Type-3a-Ubi-R.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3B</td><td style="text-align:center;">mTurquoise2</td><td style="text-align:center;">Type-3b-mTurquoise2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3B</td><td style="text-align:center;">Venus</td><td style="text-align:center;">Type-3b-Venus.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3B</td><td style="text-align:center;">mRuby2</td><td style="text-align:center;">Type-3b-mRuby2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3</td><td style="text-align:center;">mTurquoise2</td><td style="text-align:center;">Type-3-mTurquoise2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3</td><td style="text-align:center;">Venus</td><td style="text-align:center;">Type-3-Venus.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3</td><td style="text-align:center;">mRuby2</td><td style="text-align:center;">Type-3-mRuby2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3</td><td style="text-align:center;">I-SceI(ORF)</td><td style="text-align:center;">Type-3-I-SceI(ORF).fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type3</td><td style="text-align:center;">Cas9</td><td style="text-align:center;">Type-3-Cas9.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type234</td><td style="text-align:center;">GFP-dropout</td><td style="text-align:center;">Type-234r-GFP-dropout.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type234</td><td style="text-align:center;">Spacer</td><td style="text-align:center;">Type-234-Spacer.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type234</td><td style="text-align:center;">I-SceI-recognition-site</td><td style="text-align:center;">Type-234-I-SceI-recognition-site.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type234</td><td style="text-align:center;">sgRNA-Dropout</td><td style="text-align:center;">Type-234-sgRNA-Dropout.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4A</td><td style="text-align:center;">mTurquoise2</td><td style="text-align:center;">Type-4a-mTurquoise2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4A</td><td style="text-align:center;">Venus</td><td style="text-align:center;">Type-4a-Venus.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4A</td><td style="text-align:center;">mRuby2</td><td style="text-align:center;">Type-4a-mRuby2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4A</td><td style="text-align:center;">3XFLAG-6XHis</td><td style="text-align:center;">Type-4a-3XFLAG-6XHis.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4B</td><td style="text-align:center;">tENO1</td><td style="text-align:center;">Type-4b-tENO1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4B</td><td style="text-align:center;">tSSA1</td><td style="text-align:center;">Type-4b-tSSA1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4B</td><td style="text-align:center;">tADH1</td><td style="text-align:center;">Type-4b-tADH1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4B</td><td style="text-align:center;">tPGK1</td><td style="text-align:center;">Type-4b-tPGK1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4B</td><td style="text-align:center;">tENO2</td><td style="text-align:center;">Type-4b-tENO2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4B</td><td style="text-align:center;">tTDH1</td><td style="text-align:center;">Type-4b-tTDH1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4</td><td style="text-align:center;">tENO1</td><td style="text-align:center;">Type-4-tENO1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4</td><td style="text-align:center;">tSSA1</td><td style="text-align:center;">Type-4-tSSA1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4</td><td style="text-align:center;">tADH1</td><td style="text-align:center;">Type-4-tADH1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4</td><td style="text-align:center;">tPGK1</td><td style="text-align:center;">Type-4-tPGK1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4</td><td style="text-align:center;">tENO2</td><td style="text-align:center;">Type-4-tENO2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type4</td><td style="text-align:center;">tTDH1</td><td style="text-align:center;">Type-4-tTDH1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type5</td><td style="text-align:center;">ConR1</td><td style="text-align:center;">Type-5-ConR1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type5</td><td style="text-align:center;">ConR2</td><td style="text-align:center;">Type-5-ConR2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type5</td><td style="text-align:center;">ConR3</td><td style="text-align:center;">Type-5-ConR3.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type5</td><td style="text-align:center;">ConR4</td><td style="text-align:center;">Type-5-ConR4.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type5</td><td style="text-align:center;">ConR5</td><td style="text-align:center;">Type-5-ConR5.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type5</td><td style="text-align:center;">ConRE</td><td style="text-align:center;">Type-5-ConRE.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type5</td><td style="text-align:center;">ConRE&#39;</td><td style="text-align:center;">Type-5-ConREpre.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type6</td><td style="text-align:center;">URA3</td><td style="text-align:center;">Type-6-URA3.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type6</td><td style="text-align:center;">LEU2</td><td style="text-align:center;">Type-6-LEU2.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type6</td><td style="text-align:center;">HIS3</td><td style="text-align:center;">Type-6-HIS3.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type6</td><td style="text-align:center;">KanamycinR</td><td style="text-align:center;">Type-6-KanamycinR.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type6</td><td style="text-align:center;">NourseothricinR</td><td style="text-align:center;">Type-6-NourseothricinR.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type6</td><td style="text-align:center;">HygromycinR</td><td style="text-align:center;">Type-6-HygromycinR.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type6</td><td style="text-align:center;">ZeocinR</td><td style="text-align:center;">Type-6-ZeocinR.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type7</td><td style="text-align:center;">CEN6/ARS4</td><td style="text-align:center;">Type-7-CEN6/ARS4.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type7</td><td style="text-align:center;">2micron</td><td style="text-align:center;">Type-7-2micron.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type7</td><td style="text-align:center;">URA3-3&#39;-Homo</td><td style="text-align:center;">Type-7-URA3-3&#39;-Homo.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type7</td><td style="text-align:center;">LEU2-3&#39;-Homo</td><td style="text-align:center;">Type-7-LEU2-3&#39;-Homo.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type7</td><td style="text-align:center;">HO</td><td style="text-align:center;">Type-7-HO.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type8A</td><td style="text-align:center;">AmpR-ColE1</td><td style="text-align:center;">Type-8a-AmpR-ColE1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type8A</td><td style="text-align:center;">KanR-ColE1</td><td style="text-align:center;">Type-8a-KanR-ColE1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type8A</td><td style="text-align:center;">SpecR-ColE1</td><td style="text-align:center;">Type-8a-SpecR-ColE1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type8B</td><td style="text-align:center;">URA3-5&#39;-Homo</td><td style="text-align:center;">Type-8b-URA3-5&#39;-Homo.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type8B</td><td style="text-align:center;">LEU2-5&#39;-Homo</td><td style="text-align:center;">Type-8b-LEU2-5&#39;-Homo.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type8B</td><td style="text-align:center;">HO-5&#39;-Homo</td><td style="text-align:center;">Type-8b-HO-5&#39;-Homo.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type8</td><td style="text-align:center;">AmpR-ColE1</td><td style="text-align:center;">Type-8-AmpR-ColE1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type8</td><td style="text-align:center;">KanR-ColE1</td><td style="text-align:center;">Type-8-KanR-ColE1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type8</td><td style="text-align:center;">SpecR-ColE1</td><td style="text-align:center;">Type-8-SpecR-ColE1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Type678</td><td style="text-align:center;">AmpR-ColE1</td><td style="text-align:center;">Type-678-AmpR-ColE1.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">cassette</td><td style="text-align:center;">Pre-Assembled URA3 Integration Vector</td><td style="text-align:center;">cassette.fa</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr></tbody></table><p>定义好各组装片段后，画布页布局如下图：</p>', 2)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/device-design/images/案例6-1-整体布局.png"),
      alt: "案例6画布布局图"
    }, null, 8, _hoisted_17),
    _cache[249] || (_cache[249] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第二步：设置组装参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[172] || (_cache[172] = createTextVNode("选择")),
      _cache[173] || (_cache[173] = createBaseVNode("code", null, "Simple Golden Gate", -1)),
      _cache[174] || (_cache[174] = createTextVNode("组装方式，并点击")),
      _cache[175] || (_cache[175] = createBaseVNode("code", null, "Set Parameter", -1)),
      _cache[176] || (_cache[176] = createTextVNode("更改组装参数使其更加适用于您的组装工艺。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E7%BB%84%E8%A3%85%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE" }, {
        default: withCtx(() => _cache[171] || (_cache[171] = [
          createTextVNode("组装参数设置")
        ])),
        _: 1,
        __: [171]
      }),
      _cache[177] || (_cache[177] = createTextVNode("）"))
    ]),
    _cache[250] || (_cache[250] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第三步：设置QC参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[179] || (_cache[179] = createTextVNode("此部分是非必须的，用户可根据设计选择一种或多种针对组装产物的质控检验方式。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E8%B4%A8%E9%87%8F%E6%8E%A7%E5%88%B6" }, {
        default: withCtx(() => _cache[178] || (_cache[178] = [
          createTextVNode("质量控制")
        ])),
        _: 1,
        __: [178]
      }),
      _cache[180] || (_cache[180] = createTextVNode("）"))
    ]),
    _cache[251] || (_cache[251] = createStaticVNode("<p><strong>第四步：运行</strong></p><p>点击画布页面右上角绿色<code>运行</code>按钮，等待装置设计系统执行数据分析处理，完成后将在画布页下方<code>运行记录</code>列表中生成组装方案报告等。</p><p><strong>第五步：检查组装方案和结果</strong></p><p>在画布页的<code>运行记录</code>或者<code>报告</code>列表中找到本次设计的组装方案，可下载组装运行方案，预览组装产物序列图谱。</p><p><strong>第六步：提交构建</strong></p>", 5)),
    createBaseVNode("p", null, [
      _cache[182] || (_cache[182] = createTextVNode("确认组装方案可行后，可将此方案")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E8%AF%A6%E7%BB%86%E4%BB%8B%E7%BB%8D.html#%E6%8A%A5%E5%91%8A" }, {
        default: withCtx(() => _cache[181] || (_cache[181] = [
          createTextVNode("提交至下游构建")
        ])),
        _: 1,
        __: [181]
      })
    ]),
    _cache[252] || (_cache[252] = createBaseVNode("h2", {
      id: "案例7-片段的突变组装设计",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#案例7-片段的突变组装设计"
      }, [
        createBaseVNode("span", null, "案例7：片段的突变组装设计")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      _cache[184] || (_cache[184] = createTextVNode("下面将介绍如何用装置设计完成一个基因的")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/DNA%E7%BB%84%E8%A3%85%E4%BB%8B%E7%BB%8D.html#%E7%AA%81%E5%8F%98%E7%BB%84%E8%A3%85" }, {
        default: withCtx(() => _cache[183] || (_cache[183] = [
          createTextVNode("突变组装设计")
        ])),
        _: 1,
        __: [183]
      }),
      _cache[185] || (_cache[185] = createTextVNode("。"))
    ]),
    _cache[253] || (_cache[253] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第一步：新建设计并在画布页中编辑定义各组装片段")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[186] || (_cache[186] = createTextVNode("新建一个")),
      _cache[187] || (_cache[187] = createBaseVNode("code", null, "Mutation Design", -1)),
      _cache[188] || (_cache[188] = createTextVNode("类型的设计，进入画布页面后，按照下表参数定义各组装元件。（")),
      createBaseVNode("a", {
        href: _ctx.$withBase("/sequences/case7.zip"),
        download: ""
      }, "点击下载case7_seq.zip", 8, _hoisted_18),
      _cache[189] || (_cache[189] = createTextVNode("）其中定义突变基因")),
      _cache[190] || (_cache[190] = createBaseVNode("code", null, "rhIa", -1)),
      _cache[191] || (_cache[191] = createTextVNode("元件时，在画布右侧的")),
      _cache[192] || (_cache[192] = createBaseVNode("code", null, "元件详情", -1)),
      _cache[193] || (_cache[193] = createTextVNode("处将")),
      _cache[194] || (_cache[194] = createBaseVNode("code", null, "Mutation Part", -1)),
      _cache[195] || (_cache[195] = createTextVNode("勾选上，将会展示更多的突变位点相关的参数供用户设置。"))
    ]),
    _cache[254] || (_cache[254] = createStaticVNode('<table><thead><tr><th style="text-align:center;">Bin Name</th><th style="text-align:center;">Part Name</th><th style="text-align:center;">Source File</th><th style="text-align:center;">Reverse Complement?</th><th style="text-align:center;">Selection Marker</th><th style="text-align:center;">Is Mutation Part?</th><th style="text-align:center;">BsmBI (e1)</th><th style="text-align:center;">BsaI (e2)</th></tr></thead><tbody><tr><td style="text-align:center;">Level 0 Backbone</td><td style="text-align:center;">LV0-vvdB</td><td style="text-align:center;">lv0-ccdb.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">Carbenicillin</td><td style="text-align:center;">-</td><td style="text-align:center;">√</td><td style="text-align:center;">×</td></tr><tr><td style="text-align:center;">Level 1 Backbone</td><td style="text-align:center;">LV1-rhIB-ccdB</td><td style="text-align:center;">lv1-rhlb-ccdb.gb</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">Kanamycin</td><td style="text-align:center;">×</td><td style="text-align:center;">-</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:center;">part0</td><td style="text-align:center;">rhIa</td><td style="text-align:center;">RhlA-bsaI.dna</td><td style="text-align:center;">FALSE</td><td style="text-align:center;">-</td><td style="text-align:center;">√</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr></tbody></table><p><strong>第二步：设置组装参数</strong></p>', 2)),
    createBaseVNode("p", null, [
      _cache[197] || (_cache[197] = createTextVNode("选择")),
      _cache[198] || (_cache[198] = createBaseVNode("code", null, "Simple Golden Gate", -1)),
      _cache[199] || (_cache[199] = createTextVNode("组装方式，并点击")),
      _cache[200] || (_cache[200] = createBaseVNode("code", null, "Set Parameter", -1)),
      _cache[201] || (_cache[201] = createTextVNode("更改组装参数使其更加适用于您的组装工艺。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E7%BB%84%E8%A3%85%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE" }, {
        default: withCtx(() => _cache[196] || (_cache[196] = [
          createTextVNode("组装参数设置")
        ])),
        _: 1,
        __: [196]
      }),
      _cache[202] || (_cache[202] = createTextVNode("）"))
    ]),
    _cache[255] || (_cache[255] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "第三步：设置QC参数")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[204] || (_cache[204] = createTextVNode("此部分是非必须的，用户可根据设计选择一种或多种针对组装产物的质控检验方式。（详见")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/more/%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3.html#%E8%B4%A8%E9%87%8F%E6%8E%A7%E5%88%B6" }, {
        default: withCtx(() => _cache[203] || (_cache[203] = [
          createTextVNode("质量控制")
        ])),
        _: 1,
        __: [203]
      }),
      _cache[205] || (_cache[205] = createTextVNode("）"))
    ]),
    _cache[256] || (_cache[256] = createStaticVNode("<p><strong>第四步：运行</strong></p><p>点击画布页面右上角绿色<code>运行</code>按钮，等待装置设计系统执行数据分析处理，完成后将在画布页下方<code>运行记录</code>列表中生成组装方案报告等。</p><p><strong>第五步：检查组装方案和结果</strong></p><p>在画布页的<code>运行记录</code>或者<code>报告</code>列表中找到本次设计的组装方案，可下载组装运行方案，预览组装产物序列图谱。</p><p><strong>第六步：提交构建</strong></p>", 5)),
    createBaseVNode("p", null, [
      _cache[207] || (_cache[207] = createTextVNode("确认组装方案可行后，可将此方案")),
      createVNode(_component_RouteLink, { to: "/docs/device-design/guide/%E8%AF%A6%E7%BB%86%E4%BB%8B%E7%BB%8D.html#%E6%8A%A5%E5%91%8A" }, {
        default: withCtx(() => _cache[206] || (_cache[206] = [
          createTextVNode("提交至下游构建")
        ])),
        _: 1,
        __: [206]
      })
    ])
  ]);
}
const anlijieshao_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "anlijieshao.html.vue"]]);
const data = JSON.parse('{"path":"/docs/device-design/more/anlijieshao.html","title":"案例介绍","lang":"en-US","frontmatter":{"title":"案例介绍","date":"2025/05/22"},"headers":[{"level":2,"title":"案例1：简单的Gibson组装设计","slug":"案例1-简单的gibson组装设计","link":"#案例1-简单的gibson组装设计","children":[]},{"level":2,"title":"案例2：组合的Gibson组装设计","slug":"案例2-组合的gibson组装设计","link":"#案例2-组合的gibson组装设计","children":[]},{"level":2,"title":"案例3：简单的GoldenGate组装设计","slug":"案例3-简单的goldengate组装设计","link":"#案例3-简单的goldengate组装设计","children":[]},{"level":2,"title":"案例4：组合的GoldenGate组装设计","slug":"案例4-组合的goldengate组装设计","link":"#案例4-组合的goldengate组装设计","children":[]},{"level":2,"title":"案例5：从携带TypeII酶的未切割序列开始的多层级GoldenGate组装设计","slug":"案例5-从携带typeii酶的未切割序列开始的多层级goldengate组装设计","link":"#案例5-从携带typeii酶的未切割序列开始的多层级goldengate组装设计","children":[]},{"level":2,"title":"案例6：从PCR开始设计的多层级GoldenGate组装设计","slug":"案例6-从pcr开始设计的多层级goldengate组装设计","link":"#案例6-从pcr开始设计的多层级goldengate组装设计","children":[]},{"level":2,"title":"案例7：片段的突变组装设计","slug":"案例7-片段的突变组装设计","link":"#案例7-片段的突变组装设计","children":[]}],"git":{"createdTime":1748332588000,"updatedTime":1748332588000,"contributors":[{"name":"lld","email":"ld.ling@siat.ac.cn","commits":1}]},"filePathRelative":"docs/device-design/more/案例介绍.md"}');
export {
  anlijieshao_html as comp,
  data
};
