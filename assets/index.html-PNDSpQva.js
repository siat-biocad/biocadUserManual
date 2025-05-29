import { _ as _export_sfc, c as createElementBlock, a as createBaseVNode, d as createTextVNode, o as openBlock } from "./app-wHNjQSIG.js";
const _sfc_main = {};
const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "介绍",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#介绍"
      }, [
        createBaseVNode("span", null, "介绍")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("h2", {
      id: "装置设计系统是什么",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#装置设计系统是什么"
      }, [
        createBaseVNode("span", null, "装置设计系统是什么？")
      ])
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "装置设计系统是中国科学院深圳先进技术院合成生物学大设施的组成部分，实现了片段组装的设计管理，项目管理，元件管理，规则管理，实验运行过程中跟踪实验进展、状态和反馈数据，设计及实验过程中统计分析等。", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("p", null, "同时集成了行业常见分析工具（EGF、Primer3等），为不同组装设计（组合库设计、分层组装、突变组装）提供支持，并与上游数据库（元件库）和下游自动化（云实验室）连通，以简化传统组装设计的繁琐任务，使研究人员受益，极大提高科研效率。", -1)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/device-design/images/介绍.png"),
      alt: "介绍"
    }, null, 8, _hoisted_1),
    _cache[4] || (_cache[4] = createBaseVNode("h2", {
      id: "系统解决了哪些问题",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#系统解决了哪些问题"
      }, [
        createBaseVNode("span", null, "系统解决了哪些问题")
      ])
    ], -1)),
    _cache[5] || (_cache[5] = createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "高效"),
        createTextVNode("：合成生物学研究已有标准化、可自动化的DNA无痕组装方法，但传统人工组装实验设计大多繁琐、耗时、易出错。")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "规范"),
        createTextVNode("：遵守合成生物学研究文件格式，实现设计、结果的复用性；方便软件系统间数据交流。")
      ])
    ], -1))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/docs/device-design/","title":"软件介绍","lang":"en-US","frontmatter":{"title":"软件介绍","date":"2025/05/22"},"headers":[{"level":2,"title":"装置设计系统是什么？","slug":"装置设计系统是什么","link":"#装置设计系统是什么","children":[]},{"level":2,"title":"系统解决了哪些问题","slug":"系统解决了哪些问题","link":"#系统解决了哪些问题","children":[]}],"git":{"createdTime":1748332588000,"updatedTime":1748332588000,"contributors":[{"name":"lld","email":"ld.ling@siat.ac.cn","commits":1}]},"filePathRelative":"docs/device-design/README.md"}');
export {
  index_html as comp,
  data
};
