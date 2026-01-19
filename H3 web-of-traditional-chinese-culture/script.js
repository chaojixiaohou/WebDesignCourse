// 字符串常量
const title = "<h1>中华文化瑰宝：书法艺术</h1>";
const paragraph1 = "<p>书法艺术是中国传统艺术之一，主要通过毛笔书写汉字来表达作者的精神美。它不仅是造型艺术，也是表现艺术，强调线条的运用和形体结构的美感。书法艺术的特征包括：</p>";
const paragraph2 = "<p>1. 以汉字书写为基础，具有图画性和丰富性。</p>";
const paragraph3 = "<p>2. 通过对字形的变形处理，展现不同的风格和个性。</p>";
const paragraph4 = "<p>3. 书法作品常常蕴含作者的情感和对自然、社会的审美体验。</p>";  

const paragraph5 = "<p>4. 书法艺术经历了多个朝代的发展，涌现出许多优秀的书法家，如王羲之、王羲之、王羲之等。</p>";
const paragraph6 = "<p>5. 书法艺术在社会中扮演着重要的角色，不仅是文化的传承，更是社会的交流和情感的传递。</p>";
const paragraph7 = "<p>6. 书法艺术在历史上经历了多个朝代的发展，每个朝代都有其独特的风格和技巧。</p>";
const paragraph8 = "<p>7. 书法艺术在社会中扮演着重要的角色，不仅是文化的传承，更是社会的交流和情感的传递。</p>";



// 图片路径变量
const imagePath = "shufa.jpg";

// 拼接字符串变量与常量，并使用转义字符
const imageTag = "<img src=\"" + imagePath + "\" alt=\"王羲之书法作品\">";

// 函数定义
function renderContent() {
  document.write(title);
  document.write(paragraph1);
  document.write(paragraph2);
  document.write(paragraph3);
  document.write(paragraph4);
  document.write(paragraph5);
  document.write(paragraph6);
  document.write(paragraph7);
  document.write(paragraph8);
  document.write(imageTag);
}

// 事件驱动：页面加载完成后执行
window.onload = function() {
  renderContent();
};
