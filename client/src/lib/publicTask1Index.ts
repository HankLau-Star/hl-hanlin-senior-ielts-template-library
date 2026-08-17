export type TaskOneKind = "dynamic" | "static" | "map-process";

export type PublicTaskOnePrompt = {
  id: string;
  promptEn: string;
  promptZh: string;
  kind: TaskOneKind;
  kindLabel: string;
  chartType: string;
  template: "动态图模板" | "静态图模板" | "地图 / 流程图";
  source: "British Council sample" | "IELTS Liz practice";
};

// Public practice-topic index. Labels are concise, rephrased practice descriptions rather than reproduced Cambridge test papers or chart images.
export const publicTaskOnePrompts: PublicTaskOnePrompt[] = [
  { id: "d01", promptEn: "Changes in daily fruit and vegetable intake in the UK, 2001–2008", promptZh: "英国每日果蔬摄入量的变化（2001–2008）", kind: "dynamic", kindLabel: "动态图", chartType: "Bar chart", template: "动态图模板", source: "IELTS Liz practice" },
  { id: "d02", promptEn: "Trends in the consumption of three food spreads, 1981–2007", promptZh: "三种食品涂抹酱消费量趋势（1981–2007）", kind: "dynamic", kindLabel: "动态图", chartType: "Line graph", template: "动态图模板", source: "IELTS Liz practice" },
  { id: "d03", promptEn: "Transported goods in the UK over several decades", promptZh: "英国多年代货物运输量变化", kind: "dynamic", kindLabel: "动态图", chartType: "Line graph", template: "动态图模板", source: "IELTS Liz practice" },
  { id: "d04", promptEn: "Meat consumption in a European country over time", promptZh: "欧洲某国肉类消费量的时间变化", kind: "dynamic", kindLabel: "动态图", chartType: "Line graph", template: "动态图模板", source: "IELTS Liz practice" },
  { id: "d05", promptEn: "Teenagers' weekly activity hours in Chester, 2002–2007", promptZh: "切斯特青少年每周活动时长变化（2002–2007）", kind: "dynamic", kindLabel: "动态图", chartType: "Bar chart", template: "动态图模板", source: "IELTS Liz practice" },
  { id: "d06", promptEn: "Global sales patterns for digital games, 2000–2006", promptZh: "全球不同数字游戏的销售趋势（2000–2006）", kind: "dynamic", kindLabel: "动态图", chartType: "Bar chart", template: "动态图模板", source: "IELTS Liz practice" },
  { id: "d07", promptEn: "Population changes among turtle types in India, 1980–2012", promptZh: "印度不同海龟种类数量变化（1980–2012）", kind: "dynamic", kindLabel: "动态图", chartType: "Line graph", template: "动态图模板", source: "IELTS Liz practice" },
  { id: "d08", promptEn: "A school budget compared across three years", promptZh: "某学校预算在三个年份之间的对比", kind: "dynamic", kindLabel: "动态图", chartType: "Pie charts", template: "动态图模板", source: "IELTS Liz practice" },
  { id: "d09", promptEn: "Household spending by category in 1950 and 2010", promptZh: "家庭各类别支出对比（1950 与 2010）", kind: "dynamic", kindLabel: "动态图", chartType: "Pie charts", template: "动态图模板", source: "IELTS Liz practice" },
  { id: "d10", promptEn: "Energy supply now and in the future", promptZh: "当前与未来的能源供应对比", kind: "dynamic", kindLabel: "动态图", chartType: "Diagram / comparison", template: "动态图模板", source: "IELTS Liz practice" },
  { id: "d11", promptEn: "A town centre before and after redevelopment", promptZh: "某城镇中心改造前后的变化", kind: "dynamic", kindLabel: "动态图", chartType: "Map", template: "地图 / 流程图", source: "IELTS Liz practice" },
  { id: "d12", promptEn: "A coastal village before and after tourism development", promptZh: "某海滨村庄旅游开发前后的变化", kind: "dynamic", kindLabel: "动态图", chartType: "Map", template: "地图 / 流程图", source: "IELTS Liz practice" },
  { id: "s01", promptEn: "Consumer-goods spending in two countries in 2010", promptZh: "两个国家消费者商品支出对比（2010）", kind: "static", kindLabel: "静态图", chartType: "Bar chart", template: "静态图模板", source: "IELTS Liz practice" },
  { id: "s02", promptEn: "Railway-system information across six cities or countries", promptZh: "六个城市或国家地铁系统信息对比", kind: "static", kindLabel: "静态图", chartType: "Table", template: "静态图模板", source: "IELTS Liz practice" },
  { id: "s03", promptEn: "Consumer expenditure categories in five countries", promptZh: "五个国家消费者支出类别对比", kind: "static", kindLabel: "静态图", chartType: "Table", template: "静态图模板", source: "IELTS Liz practice" },
  { id: "s04", promptEn: "Employment sectors for three age groups", promptZh: "三个年龄段的就业行业分布", kind: "static", kindLabel: "静态图", chartType: "Table", template: "静态图模板", source: "IELTS Liz practice" },
  { id: "s05", promptEn: "Electricity generation in two countries in 2009", promptZh: "两个国家的发电结构对比（2009）", kind: "static", kindLabel: "静态图", chartType: "Pie charts", template: "静态图模板", source: "IELTS Liz practice" },
  { id: "s06", promptEn: "University-student distribution by category", promptZh: "大学学生按类别的分布情况", kind: "static", kindLabel: "静态图", chartType: "Pie charts", template: "静态图模板", source: "IELTS Liz practice" },
  { id: "s07", promptEn: "Income allocation across four common items in the UK", promptZh: "英国收入在四类常见项目中的分配", kind: "static", kindLabel: "静态图", chartType: "Table", template: "静态图模板", source: "IELTS Liz practice" },
  { id: "s08", promptEn: "A comparison of visitors by nationality in one year", promptZh: "某一年不同国籍游客数量的对比", kind: "static", kindLabel: "静态图", chartType: "Bar chart", template: "静态图模板", source: "British Council sample" },
  { id: "s09", promptEn: "Household access to selected technologies in one year", promptZh: "某一年家庭对多种科技产品的拥有情况", kind: "static", kindLabel: "静态图", chartType: "Bar chart", template: "静态图模板", source: "British Council sample" },
  { id: "s10", promptEn: "How a city's land area is used at one point in time", promptZh: "某城市土地在某一时点的用途分布", kind: "static", kindLabel: "静态图", chartType: "Pie chart", template: "静态图模板", source: "British Council sample" },
  { id: "m01", promptEn: "How rainwater is collected and made suitable for drinking", promptZh: "雨水如何被收集并处理为饮用水", kind: "map-process", kindLabel: "地图 / 流程", chartType: "Process diagram", template: "地图 / 流程图", source: "IELTS Liz practice" },
  { id: "m02", promptEn: "The stages used to produce a consumer product", promptZh: "某消费品的生产流程阶段", kind: "map-process", kindLabel: "地图 / 流程", chartType: "Process diagram", template: "地图 / 流程图", source: "IELTS Liz practice" },
  { id: "m03", promptEn: "How waste materials are recycled into new products", promptZh: "废弃材料如何被回收制成新产品", kind: "map-process", kindLabel: "地图 / 流程", chartType: "Process diagram", template: "地图 / 流程图", source: "IELTS Liz practice" },
  { id: "m04", promptEn: "A campus map before and after new facilities were added", promptZh: "校园新增设施前后的地图变化", kind: "map-process", kindLabel: "地图 / 流程", chartType: "Map", template: "地图 / 流程图", source: "IELTS Liz practice" },
  { id: "m05", promptEn: "A local park redesigned for new visitors", promptZh: "为新访客重新设计的本地公园地图", kind: "map-process", kindLabel: "地图 / 流程", chartType: "Map", template: "地图 / 流程图", source: "IELTS Liz practice" },
  { id: "m06", promptEn: "A harbour area changed through urban development", promptZh: "港口地区因城市开发产生的变化", kind: "map-process", kindLabel: "地图 / 流程", chartType: "Map", template: "地图 / 流程图", source: "British Council sample" },
];

export const publicTaskOneSources = [
  { label: "British Council · Free IELTS Academic Writing Practice", url: "https://takeielts.britishcouncil.org/prepare/ielts-free-practice-mock-tests/academic/writing" },
  { label: "IELTS Liz · Sample Charts for Task 1 Practice", url: "https://ieltsliz.com/ielts-sample-chart-for-writing-task-1/" },
];
