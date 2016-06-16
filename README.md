# KityFormula Editor

基于 SVG 的公式编辑器，百度前端富应用小组开发

当前文档工作未完善，有疑惑之处请发邮件联系我们。


# 文档补充

## Usage

* dev环境：需``http``协议访问``index.html``，``file``协议则显示不全
* production环境: 使用``grunt build``生成压缩合并后的.js文件


## API
* 通过latex表达式向kfe中插入公式
   * 如 ![极限公式](https://cloud.githubusercontent.com/assets/4011348/16071421/da3a42d0-330d-11e6-88f0-ce761203b1b4.png) 对应的latex表达式为``\lim_{n\rightarrow \infty} \left ( {1+ \frac{1}{n}} \right )^{n}``
   * 将latex表达式中的``\``转义： ``\\lim_{n\\rightarrow \\infty} \\left ( {1+ \\frac{1}{n}} \\right )^{n}``
   * 在浏览器的console里，若想插入该公式，执行``kfe.requestService("control.insert.string", "\\lim_{n\\rightarrow \\infty} \\left ( {1+ \\frac{1}{n}} \\right )^{n}")``
   * 替换（而非插入）该公式，执行``kfe.execCommand("render", "x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}")``


## Notes on this forked version

仿照百度百科公式编辑器，在已有的KityFormula Editor的基础上，增加功能
![百度百科](https://cloud.githubusercontent.com/assets/4011348/16103817/68baaa36-33ae-11e6-8666-2f34dc4c51eb.png)


## UEditor:

*  实例：https://github.com/fex-team/ueditor/tree/dev-1.5.0/_examples

## 公式编辑器

* UEditor 公式插件 Demo 
   * http://ueditor.baidu.com/website/kityformula.html 
   * 下载里，只有``kityformula-editor.all.min.js``，经测试发现，由 https://github.com/fex-team/kf-editor 经过``grunt build``生成

* Kity Formula Editor： 
   * http://gongshi.baidu.com/editor.html (官方网站演示)
   * https://github.com/fex-team/kityformula (Kity Formula, 包括Editor, Parser等)
   * https://github.com/fex-team/kf-editor (比``kityformula-editor``要新)
   * https://github.com/fex-team/kityformula-editor/  (似乎是废弃的repo)
   * ``kity-formular-editor`` 依赖于``kity-formula-parser.js``, ``kity-formula-render.js``, ``kitygraph.js``


* 内置公式  
  * 在``toolbar-ele-list.js``添加label和item，在``other-position.data.js``里添加button的图片位置信息
  * 已有 二次公式、二项式定理、勾股定理 
  * 百度百科公式编辑器 
     * iframe位置： http://baike.baidu.com/editor/controls/formula/formula.html?t=1465952974147 ）
     * 使用了``mathquill``和``mathjax``

## Latex 表达式
* ![Aurora: Short introduction to LaTeX symbols and commands](http://elevatorlady.ca/doc/refcard/expressions.html)


## 已经转义的latex表达式
```
二次公式
x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}
二项式定理
(x+a)^n = \\sum_{k=0}^n {n \\choose k} x^k a^{n-k}
傅立叶级数
f(x) = a_0 + \\sum_{n=1}^\\infty\\left(a_n\\cos \\frac{n \\pi x}{L}+b_n\\sin \\frac{n \\pi x}{L} \\right)
勾股定理
a^2+b^2=c^2
和的展开式
({1+x})^2 = 1 + \\frac{nx}{1!} + \\frac{n(n-1)x^2}{2!}+\\cdots
三角恒等式1
\\sin\\alpha \\pm \\sin \\beta = 2\\sin \\frac{1}{2}(\\alpha \\pm \\beta)\\cos\\frac{1}{2}(\\alpha \\mp \\beta)
三角恒等式2
\\cos\\alpha + \\cos \\beta = 2\\cos \\frac{1}{2}(\\alpha + \\beta)\\cos\\frac{1}{2}(\\alpha - \\beta)
泰勒展开式
e^x = 1+\\frac{x}{1!} + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots, -\\infty < x < \\infty
圆的面积
A = \\pi r^2
```
其他的见
* ![formulaConfig.js](baidu_baike_formula_editor/formula_baike_files/formulaConfig_formatted.js)


##  Known Issues
* 不支持的（不限于）：
  * 分段函数
  * 矩阵

## 百度百科公式1
   ![百度百科公式](http://baike.bdimg.com/static/editor/img/fastFormual-bg_99703d95.png)

## 百度百科公式2
   ![百度百科公式](http://baike.bdimg.com/static/editor/img/formula-symbol-all_8ecbac56.png)
   
