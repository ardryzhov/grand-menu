import basketL from '../img/productImage/basket-l.jpg';
import boksMaster from '../img/productImage/boks-master.jpg';
import cheesburgerLyk from '../img/productImage/cheesburger-lyk.jpg';
import coctailLatte from '../img/productImage/coctail-latte.jpg';
import cruasan from '../img/productImage/cruasan.jpg';
import donutCho from '../img/productImage/donut-cho.jpg';
import donut from '../img/productImage/donut.jpg';
import fries from '../img/productImage/fries.jpg';
import latteCoffe from '../img/productImage/latte-coffe.jpg';
import milkCoctail from '../img/productImage/milk-coctail.jpg';
import pekan from '../img/productImage/pekan.jpg';
import shefburger from '../img/productImage/shefburger.jpg';
import threeOstrieNoshki from '../img/productImage/three-ostrie-noshki.jpg';
import twisterOstriy from '../img/productImage/twister-ostriy.jpg';
import funchoza from '../img/productImage/funchoza.jpg';
import gribnoySup from '../img/productImage/gribnoy-sup.jpg';
import krokety from '../img/productImage/krokety.jpg';
import kyriniySup from '../img/productImage/kyriniy-sup.jpg';
import kyrinyiKrila from '../img/productImage/kyrinyi-krila.jpg';
import pelmeni from '../img/productImage/pelmeni.jpg';
import wok from '../img/productImage/wok.jpg';
import buissnesLanch from '../img/productImage/buissnesLanch.jpg';
import cheeseSup from '../img/productImage/cheese-sup.jpg';

const products = {
	prd1: 	{
		title: 'Чизбургер с луком', 
		img: {cheesburgerLyk},
		price: 72,
		details: 'Пряный горчичный соус, кетчуп, сочные стрипсы в оригинальной панировке, лук, ломтик сыра, огурцы на пшеничной булочке с кукурузной посыпкой.',
		ticker: 'Еда'
	},
	prd2: 	{
		title: 'Твистер острый', 
		img: {twisterOstriy},
		price: 174,
		details: 'Закручен со вкусом! Кусочки нежнейшего куриного филе в хрустящей острой или оригинальной панировке с сочными листьями салата, кусочками помидора и нежным соусом мы завернули в пшеничную лепешку и поджарили в тостере. Тут все и закрутилось!',
		ticker: 'Еда'
	},
	prd3: 	{
		title: 'Баскет L', 
		img: {basketL},
		price: 649,
		details: '28 Крылышек в острой панировке',
		ticker: 'Еда'
	},
	prd4: 	{
		title: 'Картофель Фри Стандартный', 
		img: {fries},
		price: 72,
		details: 'Еще больше вкуса! В наших крупных ломтиках мы сохранили еще больше вкуса твоего любимого картофеля фри. Он получается именно таким, как ты любишь – с аппетитно хрустящей корочкой и мягкой, рассыпчатой серединкой. Любимое удовольствие!',
		ticker: 'Еда'
	},
	prd5: 	{
		title: '3 Острые ножки', 
		img: {threeOstrieNoshki},
		price: 156,
		details: 'Долгожданная новинка в KFC - острые ножки от Полковника Сандерса! Свежее, ароматное мясо на кости - для любителей пикантных ощущений. Всё гениальное остро!',
		ticker: 'Еда'
	},
	prd6: 	{
		title: 'Шефбургер Джуниор острый', 
		img: {shefburger},
		price: 99,
		details: 'Два сочных стрипса в острой панировке, сочные листья салата, пикантные маринованные огурчики, лук, фирменный соус «Бургер» и булочка с черно-белым кунжутом.',
		ticker: 'Еда'
	},
	prd7: 	{
		title: 'Боксмастер оригинальный', 
		img: {boksMaster},
		price: 204,
		details: 'Полная перезагрузка! Мощный заряд энергии в нашем БоксМастере! Сочное куриное филе в оригинальной или острой хрустящей панировке, румяный хашбраун, ломтик сыра, кусочки помидора, салат и нежный соус в горячей лепешке – динамично и со вкусом!',
		ticker: 'Еда'
	},
	prd8: 	{
		title: 'Коктейл Карамельный Латте',
		img: {coctailLatte},
		price: 115,
		details: 'Молочный коктейль со вкусом сливочной карамели и кофе',
		ticker: 'Напитки'
	},
	prd9: 	{
		title: 'Молочный Коктейль Клубничный', 
		img: {milkCoctail},
		price: 114,
		details: 'Великолепно взбитый коктейль, приготовленный из высококачественной молочной смеси и клубничного сиропа (Средний 470 мл, Большой 600 мл)',
		ticker: 'Напитки'
	},
	prd10: 	{
		title: 'Молочный Коктейль Ванильный', 
		img: {milkCoctail},
		price: 114,
		details: 'Великолепно взбитый коктейль, приготовленный из высококачественной молочной смеси и ванильного сиропа (Средний 470 мл, Большой 600 мл)',
		ticker: 'Напитки'
	},
	prd11: 	{
		title: 'Латте', 
		img: {latteCoffe},
		price: 104,
		details: 'Молочный напиток с тонким ароматом эспрессо и нежной молочной пеной (Средний 300 мл, Большой 400 мл)',
		ticker: 'Напитки'
	},
	prd12: 	{
		title: 'Капучино', 
		img: {latteCoffe},
		price: 104,
		details: 'Молочный напиток с тонким ароматом эспрессо и плотной шапкой молочной пены (Средний 300 мл, Большой 400 мл)',
		ticker: 'Напитки'
	},
	prd13: 	{
		title: 'Донат с шоколадным кремом', 
		img: {donutCho},
		price: 95,
		details: 'Нежный донат с шоколадно-кремовой начинкой, покрытый молочной и шоколадной глазурью',
		ticker: 'Закуски'
	},
	prd14: 	{
		title: 'Кленовый пекан', 
		img: {pekan},
		price: 105,
		details: 'Воздушная плетёная булочка из слоёного теста, украшенная орехом пекан и глазурью',
		ticker: 'Закуски'
	},
	prd15: 	{
		title: 'Донат с ванильным кремом', 
		img: {donut},
		price: 95,
		details: 'Аромантый донат с нежной начинкой из ванильного крема, покрытый белой и шоколадной глазурью',
		ticker: 'Закуски'
	},
	prd16: 	{
		title: 'Круассан', 
		img: {cruasan},
		price: 85,
		details: 'Круассан из слоёного дрожжевого теста',
		ticker: 'Закуски'
	},
	prd17: 	{
		title: 'Бизнес-ланч', 
		img: {buissnesLanch},
		price: 589,
		details: 'Ароматный суп "Том ям" со слегка обжаренной курицей и очищенными до хвостика креветками, Вок яичная лапша с куриной грудкой, омлетом и овощным миксом (зеленая фасоль, морковь, цветная и белая капуста, болгарский перец) в соусе Токио (терияки) и насыщенный витаминами облепиховый напиток (500 мл)',
		ticker: 'Акция'
	},
	prd18: 	{
		title: 'Дим-самы с говядиной и свининой', 
		img: {pelmeni},
		price: 229,
		details: 'Нежные пельмени из рисового теста на пару с начинкой из говядины и свинины с соевым соусом',
		ticker: 'Акция'
	},
	prd19: 	{
		title: 'Вок удон с куриной грудкой в ароматном соусе', 
		img: {wok},
		price: 317,
		details: 'Сочная лапша удон с нежной куриной грудкой, приправленные свежим омлетом и овощным миксом (зеленая фасоль, морковь, цветная и белая капуста, болгарский перец) в ароматном соусе Токио (терияки) или слегка остром ароматном соусе Том ям. 349 ккал/100 г',
		ticker: 'Акция'
	},
	prd20: 	{
		title: 'Салат "Фунчоза"', 
		img: {funchoza},
		price: 109,
		details: 'Салат из рисовой лапши, белокочанной капусты, моркови, кинзы, грибов шиитаке, заправленный специальным соусом для салатов',
		ticker: 'Акция'
	},
	prd21: 	{
		title: 'Суп сырный', 
		img: {cheeseSup},
		price: 140,
		details: 'Лук, морковь, картофель, сыр. Подается в съедобном стакане из пшеничной муки с добавлением куркумы, семян льна и кунжута',
		ticker: 'Акция'
	},
	prd22: 	{
		title: 'Суп грибной', 
		img: {gribnoySup},
		price: 140,
		details: 'Лук, картофель, сливки, грибы шампиньоны. Подается в съедобном стакане из пшеничной муки с добавлением куркумы, семян льна и кунжута',
		ticker: 'Акция'
	},
	prd23: 	{
		title: 'Суп куриный', 
		img: {kyriniySup},
		price: 140,
		details: 'Курица, лук, морковь, картофель, вермишель. Подается в съедобном стакане из пшеничной муки с добавлением куркумы, семян льна и кунжута',
		ticker: 'Акция'
	},
	prd24: 	{
		title: 'Крылья куриные жареные', 
		img: {kyrinyiKrila},
		price: 265,
		details: 'Крылья куриные, специи, соус кикоман, соус терьяки, масло растительное.',
		ticker: 'Акция'
	},
	prd25:	{
		title: 'Крокеты куриные с копченым сыром', 
		img: {krokety},
		price: 265,
		details: 'Грудка куриная, бедро куриное, лук репч., хлеб, молоко, чеснок, продукт плавленный колбасный копч., паприка острая панировочные сухари,масло фритюрное',
		ticker: 'Акция'
	}, 
}


export default products;