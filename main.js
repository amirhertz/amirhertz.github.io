var w=window.innerWidth;
var h=window.innerHeight;
var wMod=w/(Math.round(w/20));
var hMod=h/(Math.round(h/20));
var menu_width=5*wMod;
var imageW=30*wMod;
var imR=2/3;
if (imageW>w-2*(menu_width+3*wMod))
	imageW=w-2*(menu_width+3*wMod)
var photoAr=[];
var offset_left = menu_width+2*wMod;

window.onload = main;

function get_block() {
	let block_elem = document.createElement('div');
	block_elem.setAttribute('id','block_elem');
	block_elem.style.left = 0+'px';
	return block_elem;
}

function add_about(canvas_stage) {
	let block = get_block()
	let topic = document.createElement('p');
	let image_width = imageW * imR;
	topic.setAttribute('id','topic');
	topic.style.width= menu_width  +'px';
	topic.style.paddingTop = 50  + "px";
	topic.style.paddingLeft=1*wMod;
	topic.innerHTML = "Amir Hertz";
	block.appendChild(topic);
	let offset = offset_left - menu_width - wMod;
	let about_text = document.createElement('p');
	about_text.setAttribute('id','text_a');
	about_text.style.width=  image_width+ 100 +'px';
	about_text.style.textAlign = "left";
	about_text.style.paddingLeft = offset;

	about_text.innerHTML=document.getElementById('about').innerHTML;
	block.appendChild(about_text);
	let image_elem = document.createElement('img');
	image_elem.setAttribute('id','photo');
	image_elem.style.paddingLeft = offset  + "px";
	image_elem.style.paddingTop = 50  + "px";
	image_elem.src="20170713_100828.jpg";
	block.appendChild(image_elem);
	canvas_stage.appendChild(block);
	console.log(about_text.offsetHeight);
	console.log(about_text.style.height);
	console.log(about_text.clientHeight);
	image_elem.style.height = about_text.offsetHeight - 100;
	image_elem.style.width = "auto"
	return about_text.offsetHeight;
}


function add_publication(canvas_stage) {
	let photo_src = document.querySelectorAll('#image_src');
	let texts = document.querySelectorAll('#project_txt');
	let image_width = imageW * imR;
	for(let p = 0; p < photo_src.length; ++p) {
			let block_elem = get_block()
			let offset = offset_left
			if (p === 0){
				let topic = document.createElement('p');
				topic.setAttribute('id','topic');
				topic.style.width= menu_width  +'px';
				topic.style.paddingLeft=1*wMod;
				topic.innerHTML = "Publications";
				block_elem.appendChild(topic);
				offset = offset_left - menu_width - wMod;
			}


			let image_elem = document.createElement('img');
			image_elem.setAttribute('id','photo');
			image_elem.style.paddingLeft = offset  + "px";
			image_elem.src=photo_src[p].innerHTML;
			image_elem.style.width = image_width+'px';
			let text_a = document.createElement('p');
			text_a.innerHTML = texts[p].innerHTML;
			text_a.setAttribute('id','text');
			// text_a.style.width= .5 * image_width  +'px';
			// text_a.style.left = offset_left + image_width + wMod +'px';
			block_elem.appendChild(image_elem);
			block_elem.appendChild(text_a);
			canvas_stage.appendChild(block_elem);

		}

}

function add_awards(canvas_stage) {
	let block = get_block()
	let topic = document.createElement('p');
	topic.setAttribute('id','topic');
	topic.style.width= menu_width  +'px';
	topic.style.paddingLeft=1*wMod;
	topic.style.paddingTop = 50  + "px";
	topic.innerHTML = "Awards";
	block.appendChild(topic);
	let offset = offset_left - menu_width - wMod;
	let about_text = document.createElement('p');
	about_text.setAttribute('id','text_a');
	about_text.style.width= imR*imageW+'px';
	about_text.style.textAlign = "left";
	about_text.style.paddingLeft = offset;
	about_text.style.top=2 * hMod +'px';
	about_text.innerHTML=document.getElementById('awards').innerHTML;
	block.appendChild(about_text);
	canvas_stage.appendChild(block);
	return about_text.offsetHeight;
}

function main() {
	let canvas_stage=document.getElementById('canvas_stage')
	// let menu=document.getElementById('menu');
	// menu.style.width=menu_width;
	// menu.style.height = h;

	add_about(canvas_stage);
	add_publication(canvas_stage);
	add_awards(canvas_stage);
}

