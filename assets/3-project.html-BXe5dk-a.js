import { _ as _export_sfc, c as createElementBlock, a as createBaseVNode, b as createStaticVNode, o as openBlock } from "./app-wHNjQSIG.js";
const _sfc_main = {};
const _hoisted_1 = ["src"];
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
const _hoisted_4 = ["src"];
const _hoisted_5 = ["src"];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "项目管理",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#项目管理"
      }, [
        createBaseVNode("span", null, "项目管理")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("h2", {
      id: "项目创建",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#项目创建"
      }, [
        createBaseVNode("span", null, "项目创建")
      ])
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "功能入口：", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("ol", null, [
      createBaseVNode("li", null, "登录平台后，你可以点击左侧导航「 + 」按钮，选择「 项目 」。"),
      createBaseVNode("li", null, "进入团队管理--项目管理页，单击页面右上角「 创建项目 」。")
    ], -1)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/component-library/images/upload_58a5384330cb87956113cc2d10507ef0.png"),
      alt: " "
    }, null, 8, _hoisted_1),
    createBaseVNode("img", {
      src: _ctx.$withBase("/component-library/images/upload_18e26ba1c189e3995e3d57415aa5ea8b.png"),
      alt: " "
    }, null, 8, _hoisted_2),
    _cache[4] || (_cache[4] = createBaseVNode("p", null, "操作流程：", -1)),
    _cache[5] || (_cache[5] = createBaseVNode("p", null, "在「 创建项目 」弹窗页内，输入你的项目名称、项目所属者、描述等信息，邀请成员加入项目，点击创建即可。", -1)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/component-library/images/upload_4c53cfbf15aa105948cd4a88b4c39e58.png"),
      alt: " "
    }, null, 8, _hoisted_3),
    _cache[6] || (_cache[6] = createStaticVNode('<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul><li>同一个账号可以创建多个项目，并且加入多个项目。</li><li>创建项目的账号，默认为该项目的所属者，拥有项目管理最高权限，项目所属者不能被移出项目。</li><li>所属者决定该项目属于个人项目还是团队项目。</li></ul></div><p><strong>邀请项目成员</strong></p><p>操作流程：</p><ol><li>在「 创建项目 」或「 项目配置 」弹窗内，输入用户账号信息（邮箱地址、用户名、姓名）搜索加入，并为项目成员设置角色。</li><li>点击 「 确认 」完成。</li></ol>', 4)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/component-library/images/upload_f5d18b4fe56186ef04f2a94e35ee5564.png"),
      alt: " "
    }, null, 8, _hoisted_4),
    _cache[7] || (_cache[7] = createStaticVNode('<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul><li>支持邀请单个用户或整个团队作为项目成员，若某用户同时以个人身份和团队成员身份参与项目，则该用户将拥有两种角色权限的组合权限。</li><li>项目所属者和项目管理员可以在项目成员列表中分配各项目成员的角色。</li></ul></div><h2 id="删除项目" tabindex="-1"><a class="header-anchor" href="#删除项目"><span>删除项目</span></a></h2><p>如若你是项目所属者，想要删除项目，找到需要删除的项目，点击「 删除 」按钮即可。</p>', 3)),
    createBaseVNode("img", {
      src: _ctx.$withBase("/component-library/images/upload_d39f41b74cded05375d88b443ccaa63f.png"),
      alt: " "
    }, null, 8, _hoisted_5),
    _cache[8] || (_cache[8] = createStaticVNode('<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul><li>删除项目后，该项目的所有内容将被删除，且不可恢复，请慎重操作。</li></ul></div><h2 id="项目权限说明" tabindex="-1"><a class="header-anchor" href="#项目权限说明"><span>项目权限说明</span></a></h2><p><strong>项目分团队项目和个人项目：</strong></p><ul><li>平台以项目为单位的权限管理，为每个项目设置专门的管理人员</li><li>团队权限不影响项目权限，团队成员也可以是项目管理员</li><li>在不同的项目中，拥有不同的项目操作权限，实现更加精细化的管理</li><li>项目权限包含 3 种角色：所属者、项目管理员、项目成员，权限操作遵循“所属者 &gt; 项目管里员 &gt; 项目成员”的原则；</li><li>团队项目支持自定义添加设置项目角色，且此权限设置与团队角色无关。</li><li>用户在不同的项目中，项目角色可以不同；如在 A 项目是项目管理员，B 项目中是项目成员。</li><li>不同的项目角色，对应的功能权限有所不同。</li></ul>', 4))
  ]);
}
const _3Project_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "3-project.html.vue"]]);
const data = JSON.parse('{"path":"/docs/component-library/more/3-project.html","title":"项目管理","lang":"en-US","frontmatter":{"title":"项目管理","date":"2025/05/22"},"headers":[{"level":2,"title":"项目创建","slug":"项目创建","link":"#项目创建","children":[]},{"level":2,"title":"删除项目","slug":"删除项目","link":"#删除项目","children":[]},{"level":2,"title":"项目权限说明","slug":"项目权限说明","link":"#项目权限说明","children":[]}],"git":{"createdTime":1748332588000,"updatedTime":1748332588000,"contributors":[{"name":"lld","email":"ld.ling@siat.ac.cn","commits":1}]},"filePathRelative":"docs/component-library/more/3-project.md"}');
export {
  _3Project_html as comp,
  data
};
