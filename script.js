const titles = [
  "The Rights to Education",
  "Overview Worldwide",
  "Understand the Rights to Education",
  "How Many People are Denied?",
  "Why Does it Matter?",
  "Understanding Education as a Right",
];

const descriptions = [
  "Still in now days education is not important to a lot of people. More than 72 million children of primary education age are not in school and 759 million adults are illiterate and do not have the awareness necessary to improve both their living conditions and those of their children. But for more, they don't have the opportunity to be educated, here we may need to volunteers and help them. In other cases they aren't seen as people and don't get the rights to be educated.",
  "The most effected region is Sub-Saharan Africa with over 32 million children of primary school age remaining uneducated. Next is Central and Eastern Asia as well as the Pacific, are also severely affected by this problem with more than 27 million uneducated children.<br>Additionally, these regions must also solve continuing problems of educational poverty (a child in education for less than 4 years) and extreme educational poverty (a child in education for less than 2 years).<br>Essentially this concerns Sub-Saharan Africa where more than half of children receive an education for less than 4 years. In certain countries, such as Somalia and Burkina Faso, more than 50% of children receive an education for a period less than 2 years.<br>The lack of schooling and poor education have negative effects on the population and country.  The children leave school without having acquired the basics, which greatly impedes the social and economic development of these countries.",
  '"Every human being has  the right *all above are very to quality education and lifelong learning opportunities."  Education is a basic human right that works to raise men and women out of poverty, level inequality. But at the same time worldwide 258 million children are still out of school and sociality. (* other human rights include the rights to freedom from slavery and torture, freedom of opinion and expression etc, all of the above is very important, so why is education not?)',
  "According to the most recent figures available from UNESCO it says that 263 million children are out of school. This includes 61 million children who would be in primary school, 60 million of lower secondary school age (ages 12~14) and 142 million who are aged between 15 and 17 ( Girls and children from sub-Saharan Africa are most likely to miss out their education. Many children struggle to get an education-22 million children   of primary school age are affected by this ( I think its called Armed conflict ). 75 million children and adolescents have had their education directly affected by conflict and emergencies.",
  "Education reduces poverty, decreases social inequalities, empowers women. It also brings significant economic returns for a country and helps societies to achieve lasting peace and sustainable development. Education is a key to achieving all other humans rights!",
  "&#9;This means education is granted to everyone legally without any discrimination<br>&#9;States have the obligation to protect, respect, the rights to education<br>What are human rights?<br>&#9;Human rights are given to all humans, regardless of there nationality, gender, rase, believe  or other things<br>Why do we mean by educational rights?<br>&#9;A free and good primary school for EVERY child<br>&#9;Secondary school will include technology training, must be available to everyone providing for free<br>&#9;Higher education must be equally accessible with countries working towards the goal making this free<br>&#9;Fundamental education for those who missed out",
];

const title = document.getElementById("title");
const description = document.getElementById("description");
title.textContent = titles[0];
description.innerHTML = descriptions[0];

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    title.textContent = titles[btn.id];
    description.innerHTML = descriptions[btn.id];
    buttons.forEach((item) => item.classList.remove("selected"));
    btn.classList.add("selected");
  });
});
