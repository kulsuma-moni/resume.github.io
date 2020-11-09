const profile_propertis = document.getElementById('profile_propertis');
const name_input = document.getElementById('name_input');
const name_output = document.getElementById('name_output');

$("#data_insert").click( function(event){
    event.preventDefault();
    const name_inputValue = name_input.value;
    console.log(name_inputValue);
    const text= ` 
    <p class="demo_re_1_pop_1" id="name_output" >${name_inputValue}</p>
    `
	name_output.innerHTML =text;
});

$('#data_insert').click(function(){
	$("#re_pop_1").hide();
});

// OUTPUT_2

const profile_propertis_2 = document.getElementById('profile_propertis_2');
const location_input = document.getElementById('location_input');
const phone_input = document.getElementById('phone_input');
const email_input = document.getElementById('email_input');
const data_output_2 = document.getElementById('data_output_2');

$("#data_insert_2").click( function(event){
    event.preventDefault();
	const location_inputValue = location_input.value;
	const phone_inputValue = phone_input.value;
	const email_inputValue = email_input.value;
    console.log(location_inputValue,phone_inputValue,email_inputValue);
    const contact= ` 
	<span>${location_inputValue}</span><br>
	<span>${phone_inputValue}</span><br>
	<span>${email_inputValue}</span>
    `
	data_output_2.innerHTML =contact;
});

$('#data_insert_2').click(function(){
	$("#re_pop_2").hide();
});

// OUTPUT_3
const profile_propertis_3 = document.getElementById('profile_propertis_3');
const skill_input = document.getElementById('skill_input');
const expe_input = document.getElementById('expe_input');
const data_output_3 = document.getElementById('data_output_3');

$("#data_insert_3").click( function(event){
    event.preventDefault();
	const skill_inputValue = skill_input.value;
	const expe_inputValue = expe_input.value;
    console.log(skill_inputValue,expe_inputValue);
    const skill= ` 
	<span>${skill_inputValue}</span>
	<span class="last_span">${expe_inputValue}<span
    `
	data_output_3.innerHTML =skill;
});

$('#data_insert_3').click(function(){
	$("#re_pop_3").hide();
});

// SUB OUTPUT_1
$("#data_sub_insert_1").click( function(event){
	event.preventDefault();
	const sub_profile_propertis_1 = document.getElementById('sub_profile_propertis_1');
	const skill_sub_input_1 = document.getElementById('skill_sub_input_1');
	const sub_expe_input_1 = document.getElementById('sub_expe_input_1');
	const data_sub_output_1 = document.getElementById('data_sub_output_1');
	const skill_sub_input_1Value = skill_sub_input_1.value;
	const sub_expe_input_1Value = sub_expe_input_1.value;
	console.log(skill_sub_input_1Value,sub_expe_input_1Value);
	const new_try =document.createElement("div");
	new_try.className="new_div";
	const new_skill_input =document.createElement("span");
	const new_expe_input =document.createElement("span");
	new_expe_input.style.paddingLeft="10px";
	const remove =document.createElement("button");
	remove.className="far fa-trash-alt";
	const new_input_1 =document.createTextNode(skill_sub_input_1Value);
	const new_input_2 =document.createTextNode(sub_expe_input_1Value);
	new_skill_input.appendChild(new_input_1);
	new_try.appendChild(new_skill_input);
	new_expe_input.appendChild(new_input_2);
	new_try.appendChild(new_expe_input);
	new_try.appendChild(remove);
	data_sub_output_1.appendChild(new_try);

	$(remove).on("click", function(e){ //user click on remove text
           
		e.preventDefault(); 
		$(this).parent('.new_div').remove(); 
		});

});

$('#data_sub_insert_1').click(function(){
	$("#re_1_sub_pop_1").hide();
});

// SUB OUTPUT_4

$("#data_sub_insert_4").click( function(event){
	event.preventDefault();
	const sub_profile_propertis_4 = document.getElementById('sub_profile_propertis_4');
	const skill_sub_input_2 = document.getElementById('skill_sub_input_2');
	const sub_expe_input_2 = document.getElementById('sub_expe_input_2');
	const data_sub_output_4 = document.getElementById('data_sub_output_4');
	const skill_sub_input_2Value = skill_sub_input_2.value;
	const sub_expe_input_2Value = sub_expe_input_2.value;
	console.log(skill_sub_input_2Value,sub_expe_input_2Value);
	const new_try =document.createElement("div");
	new_try.className="new_div";
	const new_skill_input =document.createElement("span");
	const new_expe_input =document.createElement("span");
	new_expe_input.style.paddingLeft="10px";
	const remove =document.createElement("button");
	remove.className="far fa-trash-alt";
	const new_input_1 =document.createTextNode(skill_sub_input_2Value);
	const new_input_2 =document.createTextNode(" "+ sub_expe_input_2Value);
	new_skill_input.appendChild(new_input_1);
	new_try.appendChild(new_skill_input);
	new_expe_input.appendChild(new_input_2);
	new_try.appendChild(new_expe_input);
	new_try.appendChild(remove);
	data_sub_output_4.appendChild(new_try);

	$(remove).on("click", function(e){ //user click on remove text
           
		e.preventDefault(); 
		$(this).parent('.new_div').remove(); 
		});

});

$('#data_sub_insert_4').click(function(){
	$("#re_2_sub_pop_1").hide();
});


// OUTPUT_4

const profile_propertis_4 = document.getElementById('profile_propertis_4');
const certi_input = document.getElementById('certi_input');
const data_output_4 = document.getElementById('data_output_4');

$("#data_insert_4").click( function(event){
    event.preventDefault();
	const certi_inputValue = certi_input.value;
    console.log(certi_inputValue);
    const certificate= ` 
	<div">
	<span>${certi_inputValue}</span>
	</div>
    `
	data_output_4.innerHTML =certificate;
});

$('#data_insert_4').click(function(){
	$("#re_pop_4").hide();
});

// OUTPUT_5

const profile_propertis_5 = document.getElementById('profile_propertis_5');
const country_input = document.getElementById('country_input');
const university_input = document.getElementById('university_input');
const subject_input = document.getElementById('subject_input');
const main_input = document.getElementById('main_input');
const graduation_input = document.getElementById('graduation_input');
const data_output_5 = document.getElementById('data_output_5');

$("#data_insert_5").click( function(event){
    event.preventDefault();
	const country_inputValue = country_input.value;
	const university_inputValue = university_input.value;
	const subject_inputValue = subject_input.value;
	const main_inputValue = main_input.value;
	const graduation_inputValue = graduation_input.value;
    console.log(country_inputValue,university_inputValue,subject_inputValue,main_inputValue,graduation_inputValue);
    const education= ` 
	<div>
	<span>${country_inputValue}</span><br>
	<span>${university_inputValue} </span><br>
	<span>${subject_inputValue}</span><br>
	<span>${main_inputValue}</span><br>
	<span>${graduation_inputValue}</span>
</div>
    `
	data_output_5.innerHTML =education;
});

$('#data_insert_5').click(function(){
	$("#re_pop_8").hide();
});


// SUB OUTPUT_2
$("#data_sub_insert_2").click( function(event){
	event.preventDefault();
	const sub_profile_propertis_2 = document.getElementById('sub_profile_propertis_2');
	const country_sub_input_1 = document.getElementById('country_sub_input_1');
	const university_sub_input_1 = document.getElementById('university_sub_input_1');
	const subject_sub_input_1 = document.getElementById('subject_sub_input_1');
	const main_sub_input_1 = document.getElementById('main_sub_input_1');
	const graduation_sub_input_1 = document.getElementById('graduation_sub_input_1');
	const data_sub_output_2 = document.getElementById('data_sub_output_2');
	const country_sub_input_1Value = country_sub_input_1.value;
	const university_sub_input_1Value = university_sub_input_1.value;
	const subject_sub_input_1Value = subject_sub_input_1.value;
	const main_sub_input_1Value = main_sub_input_1.value;
	const graduation_sub_input_1Value = graduation_sub_input_1.value;
	console.log(country_sub_input_1Value,university_sub_input_1Value,subject_sub_input_1Value,main_sub_input_1Value,graduation_sub_input_1Value);
	const new_try =document.createElement("div");
	new_try.className="new_div";
	const new_country_input_1=document.createElement("p");
	const new_university_input_1 =document.createElement("p");
	const new_subject_input_1 =document.createElement("p");
	const new_main_subject_input_1 =document.createElement("p");
	const new_graduation_input_1 =document.createElement("span");
	const remove =document.createElement("button");
	remove.className="far fa-trash-alt";
	const new_country_txt_input_1 = document.createTextNode(country_sub_input_1Value);
	const new_university_txt_input_1=document.createTextNode(university_sub_input_1Value);
	const new_subject_txt_input_1 = document.createTextNode(subject_sub_input_1Value);
	const new_main_txt_subject_input_1=document.createTextNode(main_sub_input_1Value);
	const new_graduation_txt_input_1 = document.createTextNode(graduation_sub_input_1Value);
	new_country_input_1.appendChild(new_country_txt_input_1);
	new_university_input_1.appendChild(new_university_txt_input_1);
	new_subject_input_1.appendChild(new_subject_txt_input_1);
	new_main_subject_input_1.appendChild(new_main_txt_subject_input_1);
	new_graduation_input_1.appendChild(new_graduation_txt_input_1);
	new_try.appendChild(new_country_input_1);	
	new_try.appendChild(new_university_input_1);
	new_try.appendChild(new_subject_input_1);
	new_try.appendChild(new_main_subject_input_1);
	new_try.appendChild(new_graduation_input_1);
	new_try.appendChild(remove);
	data_sub_output_2.appendChild(new_try);

	$(remove).on("click", function(e){ //user click on remove text
           
		e.preventDefault(); 
		$(this).parent('.new_div').remove(); 
		});
});

$('#data_sub_insert_2').click(function(){
	$("#re_1_sub_pop_2").hide();
});

// SUB OUTPUT_6


$("#data_sub_insert_6").click( function(event){
	event.preventDefault();
	const sub_profile_propertis_6 = document.getElementById('sub_profile_propertis_6');
	const country_sub_input_2 = document.getElementById('country_sub_input_2');
	const university_sub_input_2 = document.getElementById('university_sub_input_2');
	const subject_sub_input_2 = document.getElementById('subject_sub_input_2');
	const main_sub_input_2 = document.getElementById('main_sub_input_2');
	const graduation_sub_input_2 = document.getElementById('graduation_sub_input_2');
	const data_sub_output_6 = document.getElementById('data_sub_output_6');
	const country_sub_input_2Value = country_sub_input_2.value;
	const university_sub_input_2Value = university_sub_input_2.value;
	const subject_sub_input_2Value = subject_sub_input_2.value;
	const main_sub_input_2Value = main_sub_input_2.value;
	const graduation_sub_input_2Value = graduation_sub_input_2.value;
    console.log(country_sub_input_2Value,university_sub_input_2Value,subject_sub_input_2Value,main_sub_input_2Value,graduation_sub_input_2Value);
	const new_try =document.createElement("div");
	new_try.className="new_div";
	const new_country_input_1=document.createElement("p");
	const new_university_input_1 =document.createElement("p");
	const new_subject_input_1 =document.createElement("p");
	const new_main_subject_input_1 =document.createElement("p");
	const new_graduation_input_1 =document.createElement("span");
	const remove =document.createElement("button");
	remove.className="far fa-trash-alt";
	const new_country_txt_input_1 = document.createTextNode(country_sub_input_2Value);
	const new_university_txt_input_1=document.createTextNode(university_sub_input_2Value);
	const new_subject_txt_input_1 = document.createTextNode(subject_sub_input_2Value);
	const new_main_txt_subject_input_1=document.createTextNode(main_sub_input_2Value);
	const new_graduation_txt_input_1 = document.createTextNode(graduation_sub_input_2Value);
	new_country_input_1.appendChild(new_country_txt_input_1);
	new_university_input_1.appendChild(new_university_txt_input_1);
	new_subject_input_1.appendChild(new_subject_txt_input_1);
	new_main_subject_input_1.appendChild(new_main_txt_subject_input_1);
	new_graduation_input_1.appendChild(new_graduation_txt_input_1);
	new_try.appendChild(new_country_input_1);	
	new_try.appendChild(new_university_input_1);
	new_try.appendChild(new_subject_input_1);
	new_try.appendChild(new_main_subject_input_1);
	new_try.appendChild(new_graduation_input_1);
	new_try.appendChild(remove);
	data_sub_output_6.appendChild(new_try);

	$(remove).on("click", function(e){ //user click on remove text
           
		e.preventDefault(); 
		$(this).parent('.new_div').remove(); 
		});
});

$('#data_sub_insert_6').click(function(){
	$("#re_2_sub_pop_3").hide();
});
// OUTPUT_6

const profile_propertis_6 = document.getElementById('profile_propertis_6');
const courses_input = document.getElementById('courses_input');
const institution_input = document.getElementById('institution_input');
const present_date_input = document.getElementById('present_date_input');
const end_input = document.getElementById('end_input');
const data_output_6 = document.getElementById('data_output_6');

$("#data_insert_6").click( function(event){
    event.preventDefault();
	const courses_inputValue = courses_input.value;
	const institution_inputValue = institution_input.value;
	const present_date_inputValue = present_date_input.value;
	const end_inputValue = end_input.value;
    console.log(courses_inputValue,institution_inputValue,present_date_inputValue,end_inputValue);
    const courses= ` 
	<div>
		<span>${courses_inputValue}</span><br>
		<span>${institution_inputValue}</span><br>
		<span>${present_date_inputValue}--${end_inputValue}</span>
	</div>
    `
	data_output_6.innerHTML =courses;
});

$('#data_insert_6').click(function(){
	$("#re_pop_11").hide();
});

// OUTPUT_7

const profile_propertis_7 = document.getElementById('profile_propertis_7');
const custom_input = document.getElementById('custom_input');
const data_output_7 = document.getElementById('data_output_7');

$("#data_insert_7").click( function(event){
    event.preventDefault();
	const custom_inputValue = custom_input.value;
    console.log(custom_inputValue);
    const achivement= ` 
	<div>
		<span>${custom_inputValue}</span>
	</div>
    `
	data_output_7.innerHTML =achivement;
});

$('#data_insert_7').click(function(){
	$("#re_pop_12").hide();
});


// OUTPUT_8

const profile_propertis_8 = document.getElementById('profile_propertis_8');
const linkdin_input = document.getElementById('linkdin_input');
const social_input = document.getElementById('social_input');
const personal_input = document.getElementById('personal_input');
const data_output_8 = document.getElementById('data_output_8');

$("#data_insert_8").click( function(event){
    event.preventDefault();
	const linkdin_inputValue = linkdin_input.value;
	const social_inputValue = social_input.value;
	const personal_inputValue = personal_input.value;
    console.log(linkdin_inputValue,social_inputValue,personal_inputValue);
    const contact= ` 
	<div class="demo_re_1_pop_5" id="data_output_8">
	<span>${linkdin_inputValue}</span><br>
	<span>${social_inputValue}</span><br>
	<span>${personal_inputValue}</span>
</div>
    `
	data_output_8.innerHTML =contact;
});

$('#data_insert_8').click(function(){
	$("#re_pop_5").hide();
});

// OUTPUT_9
const profile_propertis_9 = document.getElementById('profile_propertis_9');
const job_input = document.getElementById('job_input');
const pass_input = document.getElementById('pass_input');
const experience_input = document.getElementById('experience_input');
const data_output_9 = document.getElementById('data_output_9');

$("#data_insert_9").click( function(event){
    event.preventDefault();
	const job_inputValue = job_input.value;
	const pass_inputValue = pass_input.value;
	const experience_inputValue = experience_input.value;
    console.log(job_inputValue,pass_inputValue,experience_inputValue);
    const contact= ` 
	<div>
	<span>${job_inputValue}</span><br>
	<span>${pass_inputValue}</span><br>
	<span>${experience_inputValue}</span>
	</div>
    `
	data_output_9.innerHTML =contact;
});

$('#data_insert_9').click(function(){
	$("#re_pop_6").hide();
});

//SUB  OUTPUT_3

$("#data_sub_insert_3").click( function(event){
	event.preventDefault();
	const sub_profile_propertis_3 = document.getElementById('sub_profile_propertis_3');
	const job_sub_input_1 = document.getElementById('job_sub_input_1');
	const pass_sub_input_1 = document.getElementById('pass_sub_input_1');
	const experience_sub_input_1 = document.getElementById('experience_sub_input_1');
	const data_sub_output_3 = document.getElementById('data_sub_output_3');
	const job_sub_input_1Value = job_sub_input_1.value;
	const pass_sub_input_1Value = pass_sub_input_1.value;
	const experience_sub_input_1Value = experience_sub_input_1.value;
    console.log(job_sub_input_1Value,pass_sub_input_1Value,experience_sub_input_1Value);
	const new_try =document.createElement("div");
	new_try.className="new_div";
	const new_job_input_1=document.createElement("p");
	const new_pass_input_1 =document.createElement("p");
	const new_experience_input_1 =document.createElement("span");
	const remove =document.createElement("button");
	remove.className="far fa-trash-alt";
	const new_job_txt_input_1 = document.createTextNode(job_sub_input_1Value);
	const new_pass_txt_input_1=document.createTextNode(pass_sub_input_1Value);
	const new_experience_txt_input_1 = document.createTextNode(experience_sub_input_1Value);
	new_job_input_1.appendChild(new_job_txt_input_1);
	new_pass_input_1.appendChild(new_pass_txt_input_1);
	new_experience_input_1.appendChild(new_experience_txt_input_1);
	new_try.appendChild(new_job_input_1);	
	new_try.appendChild(new_pass_input_1);
	new_try.appendChild(new_experience_input_1);
	new_try.appendChild(remove);
	data_sub_output_3.appendChild(new_try);

	$(remove).on("click", function(e){ //user click on remove text
           
		e.preventDefault(); 
		$(this).parent('.new_div').remove(); 
		});
});

$('#data_sub_insert_3').click(function(){
	$("#re_1_sub_pop_3").hide();
});

//SUB  OUTPUT_5

$("#data_sub_insert_5").click( function(event){
	event.preventDefault();
	const sub_profile_propertis_5 = document.getElementById('sub_profile_propertis_5');
	const job_sub_input_2 = document.getElementById('job_sub_input_2');
	const pass_sub_input_2 = document.getElementById('pass_sub_input_2');
	const experience_sub_input_2 = document.getElementById('experience_sub_input_2');
	const data_sub_output_5 = document.getElementById('data_sub_output_5');
	const job_sub_input_2Value = job_sub_input_2.value;
	const pass_sub_input_2Value = pass_sub_input_2.value;
	const experience_sub_input_2Value = experience_sub_input_2.value;
    console.log(job_sub_input_2Value,pass_sub_input_2Value,experience_sub_input_2Value);
	const new_try =document.createElement("div");
	new_try.className="new_div";
	const new_job_input_1=document.createElement("p");
	const new_pass_input_1 =document.createElement("p");
	const new_experience_input_1 =document.createElement("span");
	const remove =document.createElement("button");
	remove.className="far fa-trash-alt";
	const new_job_txt_input_1 = document.createTextNode(job_sub_input_2Value);
	const new_pass_txt_input_1=document.createTextNode(pass_sub_input_2Value);
	const new_experience_txt_input_1 = document.createTextNode(experience_sub_input_2Value);
	new_job_input_1.appendChild(new_job_txt_input_1);
	new_pass_input_1.appendChild(new_pass_txt_input_1);
	new_experience_input_1.appendChild(new_experience_txt_input_1);
	new_try.appendChild(new_job_input_1);	
	new_try.appendChild(new_pass_input_1);
	new_try.appendChild(new_experience_input_1);
	new_try.appendChild(remove);
	data_sub_output_5.appendChild(new_try);

	$(remove).on("click", function(e){ //user click on remove text
           
		e.preventDefault(); 
		$(this).parent('.new_div').remove(); 
		});
});

$('#data_sub_insert_5').click(function(){
	$("#re_2_sub_pop_2").hide();
});

// OUTPUT_10

const profile_propertis_10 = document.getElementById('profile_propertis_10');
const summ_ary_input_1 = document.getElementById('summ_ary_input_1');
const data_output_10 = document.getElementById('data_output_10');

$("#data_insert_10").click( function(event){
    event.preventDefault();
	const summ_ary_input_1Value = summ_ary_input_1.value;
    console.log(summ_ary_input_1Value);
    const qualification= ` 
	<div class="demo_re_1_pop_7" id="data_output_10">
		<span>${summ_ary_input_1Value}</span>
	</div>
    `
	data_output_10.innerHTML =qualification;
});

$('#data_insert_10').click(function(){
	$("#re_pop_7").hide();
});

// OUTPUT_11

const profile_propertis_11 = document.getElementById('profile_propertis_11');
const language_input = document.getElementById('language_input');
const data_output_11 = document.getElementById('data_output_11');

$("#data_insert_11").click( function(event){
    event.preventDefault();
	const language_inputValue =language_input.value;
    console.log(language_inputValue);
    const language= ` 
	<div>
		<span>${language_inputValue}</span>
	</div>
    `
	data_output_11.innerHTML =language;
});

$('#data_insert_11').click(function(){
	$("#re_pop_9").hide();
});

// OUTPUT_12
const profile_propertis_12 = document.getElementById('profile_propertis_12');
const referance_input = document.getElementById('referance_input');
const data_output_12 = document.getElementById('data_output_12');

$("#data_insert_12").click( function(event){
    event.preventDefault();
    const referance_inputValue = referance_input.value;
    console.log(referance_inputValue);
    const ref= ` 
	<div class="demo_re_1_pop_10" id="data_output_12">
		<span>${referance_inputValue}</span>
	</div>
    `
	data_output_12.innerHTML =ref;
});

$('#data_insert_12').click(function(){
	$("#re_pop_10").hide();
});

// OUTPUT_13
const profile_propertis_13 = document.getElementById('profile_propertis_13');
const text_input = document.getElementById('text_input');
const data_output_13 = document.getElementById('data_output_13');

$("#data_insert_13").click( function(event){
    event.preventDefault();
    const text_inputValue = text_input.value;
    console.log(text_inputValue);
    const text= ` 
	<div class="demo_re_1_pop_13" id="data_output_13">
		<span>${text_inputValue}</span>
	</div>
    `
	data_output_13.innerHTML =text;
});

$('#data_insert_13').click(function(){
	$("#re_pop_13").hide();
});

// OUTPUT_14
const profile_propertis_14 = document.getElementById('profile_propertis_14');
const name_input_2 = document.getElementById('name_input_2');
const data_output_14 = document.getElementById('data_output_14');

$("#data_insert_14").click( function(event){
    event.preventDefault();
    const name_input_2Value = name_input_2.value;
    console.log(name_input_2Value);
    const te= ` 
    <p>${name_input_2Value}</p>
    `
	data_output_14.innerHTML =te;
});

$('#data_insert_14').click(function(){
	$("#re_2_pop_1").hide();
});

// OUTPUT_15

const profile_propertis_15 = document.getElementById('profile_propertis_15');
const location_input_2 = document.getElementById('location_input_2');
const phone_input_2 = document.getElementById('phone_input_2');
const email_input_2 = document.getElementById('email_input_2');
const data_output_15 = document.getElementById('data_output_15');

$("#data_insert_15").click( function(event){
    event.preventDefault();
	const location_input_2Value = location_input_2.value;
	const phone_input_2Value = phone_input_2.value;
	const email_input_2Value = email_input_2.value;
    console.log(location_input_2Value,phone_input_2Value,email_input_2Value);
    const contact= `
	<div class="demo_re_2_pop_2" id="data_output_15">
	<span>${location_input_2Value} </span><br>
	<span> ${phone_input_2Value} </span><br>
	<span>${email_input_2Value}</span>
</div>
    `
	data_output_15.innerHTML =contact;
});

$('#data_insert_15').click(function(){
	$("#re_2_pop_2").hide();
});

// OUTPUT_16

const profile_propertis_16 = document.getElementById('profile_propertis_16');
const skill_input_2 = document.getElementById('skill_input_2');
const expe_input_2 = document.getElementById('expe_input_2');
const data_output_16 = document.getElementById('data_output_16');

$("#data_insert_16").click( function(event){
    event.preventDefault();
	const skill_input_2Value = skill_input_2.value;
	const expe_input_2Value = expe_input_2.value;
    console.log(skill_input_2Value, expe_input_2Value);
    const skill= `
	<span>${skill_input_2Value} </span>
	<span> ${expe_input_2Value }</span>
    `
	data_output_16.innerHTML =skill;
});

$('#data_insert_16').click(function(){
	$("#re_2_pop_3").hide();
});


// OUTPUT_17

const profile_propertis_17 = document.getElementById('profile_propertis_17');
const certificat_input_2 = document.getElementById('certificat_input_2');
const data_output_17 = document.getElementById('data_output_17');

$("#data_insert_17").click( function(event){
    event.preventDefault();
	const certificat_input_2Value = certificat_input_2.value;
    console.log(certificat_input_2Value);
    const certificate= ` 
	<div>
		<span>${certificat_input_2Value}</span>
	</div>
    `
	data_output_17.innerHTML =certificate;
});

$('#data_insert_17').click(function(){
	$("#re_2_pop_4").hide();
});

// OUTPUT_18
const profile_propertis_18 = document.getElementById('profile_propertis_18');
const language_input_2 = document.getElementById('language_input_2');
const data_output_18 = document.getElementById('data_output_18');

$("#data_insert_18").click( function(event){
    event.preventDefault();
	const language_input_2Value =language_input_2.value;
    console.log(language_input_2Value);
    const language= ` 
	<div>
		<span>${language_input_2Value}</span>
	</div>
    `
	data_output_18.innerHTML =language;
});

$('#data_insert_18').click(function(){
	$("#re_2_pop_9").hide();
});

// OUTPUT_19
const profile_propertis_19 = document.getElementById('profile_propertis_19');
const courses_input_2 = document.getElementById('courses_input_2');
const institution_input_2 = document.getElementById('institution_input_2');
const present_date_input_2 = document.getElementById('present_date_input_2');
const end_input_2 = document.getElementById('end_input_2');
const data_output_19 = document.getElementById('data_output_19');

$("#data_insert_19").click( function(event){
    event.preventDefault();
	const courses_input_2Value = courses_input_2.value;
	const institution_input_2Value = institution_input_2.value;
	const present_date_input_2Value = present_date_input_2.value;
	const end_input_2Value = end_input_2.value;
    console.log(courses_input_2Value,institution_input_2Value,present_date_input_2Value,end_input_2Value);
    const courses= ` 
	<div>
		<span>${courses_input_2Value}</span><br>
		<span>${institution_input_2Value}</span><br>
		<span>${present_date_input_2Value}--${end_input_2Value}</span>
	</div>
    `
	data_output_19.innerHTML =courses;
});

$('#data_insert_19').click(function(){
	$("#re_2_pop_11").hide();
});

// OUTPUT_20
const profile_propertis_20 = document.getElementById('profile_propertis_20');
const job_input_2 = document.getElementById('job_input_2');
const pass_input_2 = document.getElementById('pass_input_2');
const experience_input_2 = document.getElementById('experience_input_2');
const data_output_20 = document.getElementById('data_output_20');

$("#data_insert_20").click( function(event){
    event.preventDefault();
	const job_input_2Value = job_input_2.value;
	const pass_input_2Value = pass_input_2.value;
	const experience_input_2Value = experience_input_2.value;
    console.log(job_input_2Value,pass_input_2Value,experience_input_2Value);
    const contact= `
	<div>
		<span>${job_input_2Value}</span><br>
		<span>${pass_input_2Value}</span><br>
		<span>${experience_input_2Value}</span>
	</div>
    `
	data_output_20.innerHTML =contact;
});

$('#data_insert_20').click(function(){
	$("#re_2_pop_6").hide();
});

// OUTPUT_21
const profile_propertis_21 = document.getElementById('profile_propertis_21');
const country_input_2 = document.getElementById('country_input_2');
const university_input_2 = document.getElementById('university_input_2');
const degree_input_2 = document.getElementById('degree_input_2');
const major_input_2 = document.getElementById('major_input_2');
const graduation_input_2 = document.getElementById('graduation_input_2');
const data_output_21 = document.getElementById('data_output_21');

$("#data_insert_21").click( function(event){
    event.preventDefault();
	const country_input_2Value = country_input_2.value;
	const university_input_2Value = university_input_2.value;
	const degree_input_2Value = degree_input_2.value;
	const major_input_2Value = major_input_2.value;
	const graduation_input_2Value = graduation_input_2.value;
    console.log(country_input_2Value,university_input_2Value,degree_input_2Value,major_input_2Value,graduation_input_2Value);
    const education= ` 
	<div>
	<span>${country_input_2Value} </span><br>
	<span>${university_input_2Value}</span><br>
	<span>${degree_input_2Value}</span><br>
	<span>${major_input_2Value}</span><br>
	<span>${graduation_input_2Value}</span>
</div>
    `
	data_output_21.innerHTML =education;
});

$('#data_insert_21').click(function(){
	$("#re_2_pop_8").hide();
});

// OUTPUT_22

const profile_propertis_22 = document.getElementById('profile_propertis_22');
const custom_input_2 = document.getElementById('custom_input_2');
const data_output_22 = document.getElementById('data_output_22');

$("#data_insert_22").click( function(event){
    event.preventDefault();
	const custom_input_2Value = custom_input_2.value;
    console.log(custom_input_2Value);
    const achivement= ` 
	<div class="demo_re_2_pop_12" id="data_output_22">
		<span>${custom_input_2Value}</span>
	</div>
    `
	data_output_22.innerHTML =achivement;
});

$('#data_insert_22').click(function(){
	$("#re_2_pop_12").hide();
});

// OUTPUT_23

const profile_propertis_23 = document.getElementById('profile_propertis_23');
const summ_ary_input_2 = document.getElementById('summ_ary_input_2');
const data_output_23 = document.getElementById('data_output_23');

$("#data_insert_23").click( function(event){
    event.preventDefault();
	const summ_ary_input_2Value =summ_ary_input_2.value;
    console.log(summ_ary_input_2Value);
    const qualification= ` 
	<div>
		<span>${summ_ary_input_2Value}</span>
	</div>
    `
	data_output_23.innerHTML =qualification;
});

$('#data_insert_23').click(function(){
	$("#re_2_pop_7").hide();
});
// $('#data_insert_23').click(function(){
// 	$("p").css("background","transparent");
// });

// OUTPUT_24
const profile_propertis_24 = document.getElementById('profile_propertis_24');
const reference_input_2 = document.getElementById('reference_input_2');
const data_output_24 = document.getElementById('data_output_24');

$("#data_insert_24").click( function(event){
    event.preventDefault();
    const reference_input_2Value = reference_input_2.value;
    console.log(reference_input_2Value);
    const ref= ` 
	<div class="demo_re_2_pop_10" id="data_output_24">
		<span>${reference_input_2Value}</span>
	</div>
    `
	data_output_24.innerHTML =ref;
});

$('#data_insert_24').click(function(){
	$("#re_2_pop_10").hide();
});
// OUTPUT_25
const profile_propertis_25 = document.getElementById('profile_propertis_25');
const text_input_2 = document.getElementById('text_input_2');
const data_output_25 = document.getElementById('data_output_25');

$("#data_insert_25").click( function(event){
    event.preventDefault();
    const text_input_2Value = text_input_2.value;
    console.log(text_input_2Value);
    const text= ` 
	<div>
		<span>${text_input_2Value}</span>
	</div>
    `
	data_output_25.innerHTML =text;
});

$('#data_insert_25').click(function(){
	$("#re_2_pop_13").hide();
});

// $("#data_sub_insert_1").click( function(event){
// 	event.preventDefault();
// 	const sub_profile_propertis_1 = document.getElementById('sub_profile_propertis_1');
// 	const skill_sub_input_1 = document.getElementById('skill_sub_input_1');
// 	const sub_expe_input_1 = document.getElementById('sub_expe_input_1');
// 	const data_sub_output_1 = document.getElementById('data_sub_output_1');
// 	const skill_sub_input_1Value = skill_sub_input_1.value;
// 	const sub_expe_input_1Value = sub_expe_input_1.value;
// 	console.log(skill_sub_input_1Value,sub_expe_input_1Value);
// 	const new_try =document.createElement("div");
// 	new_try.className="new_div";
// 	new_try.style.marginBottom="7px";
// 	new_try.style.color="#1f1e1ebb";
// 	const new_skill_input =document.createElement("span");
// 	const new_expe_input =document.createElement("span");
// 	const remove =document.createElement("button");
// 	remove.className="far fa-trash-alt";
// 	remove.style.border="none";
// 	remove.style.float="right";
// 	const new_input_1 =document.createTextNode(skill_sub_input_1Value);
// 	const new_input_2 =document.createTextNode(" "+ sub_expe_input_1Value);
// 	new_skill_input.appendChild(new_input_1);
// 	new_try.appendChild(new_skill_input);
// 	new_expe_input.appendChild(new_input_2);
// 	new_try.appendChild(new_expe_input);
// 	new_try.appendChild(remove);
// 	data_sub_output_1.appendChild(new_try);

// 	$(remove).on("click", function(e){ //user click on remove text
           
// 		e.preventDefault(); 
// 		$(this).parent('.new_div').remove(); 
// 		});

// });






(function($){
	"use strict";

    // tooltips js
    // $('[data-toggle="tooltip"]').tooltip();

    // DEMO RESUME 1 POPUP

    // POP_1
		// RESUME_1
    $('.demo_re_1_pop_1').click(function(){
        $("#re_pop_1").show();
      });
      $('.name_close_1').click(function(){
        $("#re_pop_1").hide();
      });

	//   RESUME_2
	$('.demo_re_2_pop_1').click(function(){
        $("#re_2_pop_1").show();
      });
      $('.re_2_close_1').click(function(){
        $("#re_2_pop_1").hide();
      });
    //   POP_2
	//   RESUME_1

      $('.demo_re_1_pop_2').click(function(){
        $("#re_pop_2").show();
      });
      $('.basic_close_1').click(function(){
        $("#re_pop_2").hide();
	  });
	  	//   RESUME_2
	$('.demo_re_2_pop_2').click(function(){
        $("#re_2_pop_2").show();
      });
      $('.bas_close_1').click(function(){
        $("#re_2_pop_2").hide();
      });
        
    //   POP_3
	//   RESUME_1

    $('.demo_re_1_pop_3').click(function(){
        $("#re_pop_3").show();
      });
      $('.skill_close_1').click(function(){
        $("#re_pop_3").hide();
      });
	//   RESUME_2
	$('.demo_re_2_pop_3').click(function(){
        $("#re_2_pop_3").show();
      });
      $('.ski_close_1').click(function(){
        $("#re_2_pop_3").hide();
      });

        //   POP_4
	//   RESUME_1

    $('.demo_re_1_pop_4').click(function(){
        $("#re_pop_4").show();
      });
      $('.certificat_close_1').click(function(){
        $("#re_pop_4").hide();
      });
	//   RESUME_2
	$('.demo_re_2_pop_4').click(function(){
        $("#re_2_pop_4").show();
      });
      $('.cer_close_1').click(function(){
        $("#re_2_pop_4").hide();
      });
          //   POP_5

    $('.demo_re_1_pop_5').click(function(){
        $("#re_pop_5").show();
      });
      $('.profile_close_1').click(function(){
        $("#re_pop_5").hide();
      });

     //   POP_6

    $('.demo_re_1_pop_6').click(function(){
        $("#re_pop_6").show();
      });
      $('.work_close_1').click(function(){
        $("#re_pop_6").hide();
      });
	//   RESUME_2
	$('.demo_re_2_pop_6').click(function(){
        $("#re_2_pop_6").show();
      });
      $('.wo_close_1').click(function(){
        $("#re_2_pop_6").hide();
      });
     //   POP_7

    $('.demo_re_1_pop_7').click(function(){
      $("#re_pop_7").show();
    });
    $('.sum_close_1').click(function(){
      $("#re_pop_7").hide();
	});
		//   RESUME_2
		$('.demo_re_2_pop_7').click(function(){
			$("#re_2_pop_7").show();
		  });
		  $('.summary_close_1').click(function(){
			$("#re_2_pop_7").hide();
		  });

	//   POP_8

	$('.demo_re_1_pop_8').click(function(){
		$("#re_pop_8").show();
		});
		$('.edu_close_1').click(function(){
		$("#re_pop_8").hide();
		});
	  		//   RESUME_2
		$('.demo_re_2_pop_8').click(function(){
			$("#re_2_pop_8").show();
		  });
		  $('.education_close_1').click(function(){
			$("#re_2_pop_8").hide();
		  });

	//   POP_9

	$('.demo_re_1_pop_9').click(function(){
		$("#re_pop_9").show();
		});
		$('.lan_close_1').click(function(){
		$("#re_pop_9").hide();
		});
		//   RESUME_2
		$('.demo_re_2_pop_9').click(function(){
			$("#re_2_pop_9").show();
		  });
		  $('.langu_close_1').click(function(){
			$("#re_2_pop_9").hide();
		  });
		// POP_10

	$('.demo_re_1_pop_10').click(function(){
		$("#re_pop_10").show();
		});
		$('.ref_close_1').click(function(){
		$("#re_pop_10").hide();
		});

	//   RESUME_2
	$('.demo_re_2_pop_10').click(function(){
		$("#re_2_pop_10").show();
		});
		$('.referance_close_1').click(function(){
		$("#re_2_pop_10").hide();
		});
			// POP_11

	$('.demo_re_1_pop_11').click(function(){
		$("#re_pop_11").show();
		});
		$('.courses_close_1').click(function(){
		$("#re_pop_11").hide();
		});
		//   RESUME_2
		$('.demo_re_2_pop_11').click(function(){
			$("#re_2_pop_11").show();
		  });
		  $('.co_close_1').click(function(){
			$("#re_2_pop_11").hide();
		  });
	// POP_12

	$('.demo_re_1_pop_12').click(function(){
		$("#re_pop_12").show();
		});
		$('.custom_close_1').click(function(){
		$("#re_pop_12").hide();
		});
	//   RESUME_2
	$('.demo_re_2_pop_12').click(function(){
		$("#re_2_pop_12").show();
		});
		$('.custom_2_close_1').click(function(){
		$("#re_2_pop_12").hide();
		});

			// POP_13

	$('.demo_re_1_pop_13').click(function(){
		$("#re_pop_13").show();
		});
		$('.text_close_1').click(function(){
		$("#re_pop_13").hide();
		});

	//   RESUME_2
	$('.demo_re_2_pop_13').click(function(){
		$("#re_2_pop_13").show();
		});
		$('.te_close_1').click(function(){
		$("#re_2_pop_13").hide();
		});

	//SUB_POP_1

	$('.demo_re_1_subpop_1').click(function(){
		$("#re_1_sub_pop_1").show();
		});
		$('.sub_close_1').click(function(){
		$("#re_1_sub_pop_1").hide();
		});

	//   RESUME_2
	$('.demo_re_2_subpop_1').click(function(){
		$("#re_2_sub_pop_1").show();
		});
		$('.sub_close_4').click(function(){
		$("#re_2_sub_pop_1").hide();
		});

		//SUB_POP_2

	$('.demo_re_1_subpop_2').click(function(){
		$("#re_1_sub_pop_2").show();
		});
		$('.sub_close_2').click(function(){
		$("#re_1_sub_pop_2").hide();
		});

	//   RESUME_2
	$('.demo_re_2_subpop_2').click(function(){
		$("#re_2_sub_pop_2").show();
		});
		$('.sub_close_5').click(function(){
		$("#re_2_sub_pop_2").hide();
		});

	//SUB_POP_3

	$('.demo_re_1_subpop_3').click(function(){
		$("#re_1_sub_pop_3").show();
		});
		$('.sub_close_3').click(function(){
		$("#re_1_sub_pop_3").hide();
		});

	//   RESUME_2
	$('.demo_re_2_subpop_3').click(function(){
		$("#re_2_sub_pop_3").show();
		});
		$('.sub_close_6').click(function(){
		$("#re_2_sub_pop_3").hide();
		});
			// FONT FAMILY CHANGE JS

			$(".font_1").click(function(){
				$(".demo_template").css("font-family", "'EB Garamond', serif");
			});
  

			$(".font_2").click(function(){
				$(".demo_template").css("font-family","'Lato', sans-serif");
			});
			$(".font_3").click(function(){
				$(".demo_template").css("font-family","'Montserrat', sans-serif");
			});
			$(".font_4").click(function(){
				$(".demo_template").css("font-family","'Noto Sans JP', sans-serif");
			});
			$(".font_5").click(function(){
				$(".demo_template").css("font-family","'Open Sans', sans-serif");
			});
			$(".font_6").click(function(){
				$(".demo_template").css("font-family","'Playfair Display', serif");
			});
			$(".font_7").click(function(){
				$(".demo_template").css("font-family","'Roboto Mono', monospace");
			});
      // SUMMARY EDIT POPUP
  
              $(".font_bold_pop").click( function(event){
                  event.preventDefault();
                  if ( $(this).hasClass("op_rem") ) {
                  $(".summ_ary_pop").css("font-weight",900);
                  } else {
                  $(".summ_ary_pop").css("font-weight",400);
                  }
                  $(this).toggleClass("op_rem");
                  return false;
                  });
  
                  $(".font_bold_pop").click(function(){
                      $(this).toggleClass("active");
                  });
  
                  $(".font_italic_pop").click( function(event){
                      event.preventDefault();
                      if ( $(this).hasClass("sty_rem") ) {
                      $(".summ_ary_pop").css("font-style","italic");
                      } else {
                      $(".summ_ary_pop").css("font-style","normal");
                      }
                      $(this).toggleClass("sty_rem");
                      return false;
                      });
  
                      $(".font_italic_pop").click(function(){
                          $(this).toggleClass("active");
                      });
              
                      $(".text_underline_pop").click( function(event){
                          event.preventDefault();
                          if ( $(this).hasClass("de_rem") ) {
                          $(".summ_ary_pop").css("text-decoration","underline");
                          } else {
                          $(".summ_ary_pop").css("text-decoration","none");
                          }
                          $(this).toggleClass("de_rem");
                          return false;
                          });
  
                          $(".text_underline_pop").click(function(){
                              $(this).toggleClass("active");
                          });
                  
  
		  // TEXT STYLE ACTIVE CLASS ADD & REMOVE
		  $('.rongila').click(function() {
			$('.rongila.active').removeClass('active');
			$(this).addClass('active');
		});
		$('.rongila_2').click(function() {
			$('.rongila_2.active').removeClass('active');
			$(this).addClass('active');
		});
  
          $(".font_bold").click(function(){
              $(this).toggleClass("active");
          });
          
          $(".font_italic").click(function(){
              $(this).toggleClass("active");
          });
          
          $(".text_underline").click(function(){
              $(this).toggleClass("active");
          });
  
          // summary area
      
          $(".sum_switch").click(function(){
              $(".quali_summ").toggle();
              });
  
  
          
        // work area 
        $(".work_switch").click(function(){
          $(".work_exp").toggle();
          });
      
      // EDUCATION AREA
      $(".edu_switch").click(function(){
          $(".education_area").toggle();
          });
  
  
      //   SKILL AREA 
      $(".skill_switch").click(function(){
          $(".skills").toggle();
          });
  
      // LANGUAGE AREA
      $(".lan_switch").click(function(){
          $(".lan_guage").toggle();
          });

      // REFERANCE AREA
      $(".ref_switch").click(function(){
          $(".referance_area").toggle();
          });
  
      // COURSES AREA
      $(".cour_switch").click(function(){
          $(".courses_area").toggle();
          });
      // CUSTOM AREA
      
      $(".achive_switch").click(function(){
          $(".custom_area").toggle();
          });

      // TEXT SECTION AREA
      $(".te_switch").click(function(){
          $(".text_area").toggle();
          });

          // link area popup
          $(".link_switch").click(function(){
              $(".per_prof").toggle();
          });

		// //   DEMO RESUME
		//    // RESUME 01
		$('.demo_resume_1').click(function(){
            $('.demo_re_2 ').hide();
            $('.demo_re_1').show();
         });
		   // RESUME 01
		$('.demo_resume_2').click(function(){
            $('.demo_re_1 ').hide();
            $('.demo_re_2').show();
         });



		// COLOUR BUTTON JS
		$('.colour_1').click(function(){
			$('body').addClass('color_virson_1').removeClass('color_virson_2 color_virson_3 color_virson_4 color_virson_5 color_virson_6 color_virson_7 color_virson_8 color_virson_9 color_virson_10 color_virson_11 color_virson_12');
		});
		$('.colour_2').click(function(){
			$('body').addClass('color_virson_2').removeClass('color_virson_1 color_virson_3 color_virson_4 color_virson_5 color_virson_6 color_virson_7 color_virson_8 color_virson_9 color_virson_10 color_virson_11 color_virson_12');
		});
		$('.colour_3').click(function(){
			$('body').addClass('color_virson_3').removeClass('color_virson_1 color_virson_2 color_virson_4 color_virson_5 color_virson_6 color_virson_7 color_virson_8 color_virson_9 color_virson_10 color_virson_11 color_virson_12');
		});
		$('.colour_4').click(function(){
			$('body').addClass('color_virson_4').removeClass('color_virson_1 color_virson_2 color_virson_3 color_virson_5 color_virson_6 color_virson_7 color_virson_8 color_virson_9 color_virson_10 color_virson_11 color_virson_12');
		});
		$('.colour_5').click(function(){
			$('body').addClass('color_virson_5').removeClass('color_virson_1 color_virson_2 color_virson_3 color_virson_4 color_virson_6 color_virson_7 color_virson_8 color_virson_9 color_virson_10 color_virson_11 color_virson_12');
		});
		$('.colour_6').click(function(){
			$('body').addClass('color_virson_6').removeClass('color_virson_1 color_virson_2 color_virson_3 color_virson_4 color_virson_5 color_virson_7 color_virson_8 color_virson_9 color_virson_10 color_virson_11 color_virson_12');
		});
		$('.colour_7').click(function(){
			$('body').addClass('color_virson_7').removeClass('color_virson_1 color_virson_2 color_virson_3 color_virson_4 color_virson_5 color_virson_6 color_virson_8 color_virson_9 color_virson_10 color_virson_11 color_virson_12');
		});
		$('.colour_8').click(function(){
			$('body').addClass('color_virson_8').removeClass('color_virson_1 color_virson_2 color_virson_3 color_virson_4 color_virson_5 color_virson_6 color_virson_7 color_virson_9 color_virson_10 color_virson_11 color_virson_12');
		});
		$('.colour_9').click(function(){
			$('body').addClass('color_virson_9').removeClass('color_virson_1 color_virson_2 color_virson_3 color_virson_4 color_virson_5 color_virson_6 color_virson_7 color_virson_8 color_virson_10 color_virson_11 color_virson_12');
		});
		$('.colour_10').click(function(){
			$('body').addClass('color_virson_10').removeClass('color_virson_1 color_virson_2 color_virson_3 color_virson_4 color_virson_5 color_virson_6 color_virson_7 color_virson_8 color_virson_9 color_virson_11 color_virson_12');
		});
		$('.colour_11').click(function(){
			$('body').addClass('color_virson_11').removeClass('color_virson_1 color_virson_2 color_virson_3 color_virson_4 color_virson_5 color_virson_6 color_virson_7 color_virson_8 color_virson_9 color_virson_10 color_virson_12');
		});
		$('.colour_12').click(function(){
			$('body').addClass('color_virson_12').removeClass('color_virson_1 color_virson_2 color_virson_3 color_virson_4 color_virson_5 color_virson_6 color_virson_7 color_virson_8 color_virson_9 color_virson_10 color_virson_11');
		});
	// COLOUR AREA JS END

			// COLOUR_2 BUTTON JS
			$('.colour_13').click(function(){
				$('body').addClass('color_virson_13').removeClass('color_virson_14 color_virson_15 color_virson_16 color_virson_17 color_virson_18 color_virson_19 color_virson_20 color_virson_21 color_virson_22 color_virson_23 color_virson_24');
			});
			$('.colour_14').click(function(){
				$('body').addClass('color_virson_14').removeClass('color_virson_13 ccolor_virson_15 color_virson_16 color_virson_17 color_virson_18 color_virson_19 color_virson_20 color_virson_21 color_virson_22 color_virson_23 color_virson_24');
			});
			$('.colour_15').click(function(){
				$('body').addClass('color_virson_15').removeClass('color_virson_13 color_virson_14 color_virson_16 color_virson_17 color_virson_18 color_virson_19 color_virson_20 color_virson_21 color_virson_22 color_virson_23 color_virson_24');
			});
			$('.colour_16').click(function(){
				$('body').addClass('color_virson_16').removeClass('color_virson_13 color_virson_14 color_virson_15 color_virson_17 color_virson_18 color_virson_19 color_virson_20 color_virson_21 color_virson_22 color_virson_23 color_virson_24');
			});
			$('.colour_17').click(function(){
				$('body').addClass('color_virson_17').removeClass('color_virson_13 color_virson_14 color_virson_15 color_virson_16 color_virson_18 color_virson_19 color_virson_20 color_virson_21 color_virson_22 color_virson_23 color_virson_24');
			});
			$('.colour_18').click(function(){
				$('body').addClass('color_virson_18').removeClass('color_virson_13 color_virson_14 color_virson_15 color_virson_16 color_virson_17 color_virson_19 color_virson_20 color_virson_21 color_virson_22 color_virson_23 color_virson_24');
			});
			$('.colour_19').click(function(){
				$('body').addClass('color_virson_19').removeClass('color_virson_13 color_virson_14 color_virson_15 color_virson_16 color_virson_17 color_virson_18 color_virson_20 color_virson_21 color_virson_22 color_virson_23 color_virson_24');
			});
			$('.colour_20').click(function(){
				$('body').addClass('color_virson_20').removeClass('color_virson_13 color_virson_14 color_virson_15 color_virson_16 color_virson_17 color_virson_18 color_virson_19 color_virson_21 color_virson_22 color_virson_23 color_virson_24');
			});
			$('.colour_21').click(function(){
				$('body').addClass('color_virson_21').removeClass('color_virson_13 color_virson_14 color_virson_15 color_virson_16 color_virson_17 color_virson_18 color_virson_19 color_virson_20 color_virson_22 color_virson_23 color_virson_24');
			});
			$('.colour_22').click(function(){
				$('body').addClass('color_virson_22').removeClass('color_virson_13 color_virson_14 color_virson_15 color_virson_16 color_virson_17 color_virson_18 color_virson_19 color_virson_20 color_virson_21 color_virson_23 color_virson_24');
			});
			$('.colour_23').click(function(){
				$('body').addClass('color_virson_23').removeClass('color_virson_13 color_virson_14 color_virson_15 color_virson_16 color_virson_17 color_virson_18 color_virson_19 color_virson_20 color_virson_21 color_virson_22 color_virson_24');
			});
			$('.colour_24').click(function(){
				$('body').addClass('color_virson_24').removeClass('color_virson_13 color_virson_14 color_virson_15 color_virson_16 color_virson_17 color_virson_18 color_virson_19 color_virson_20 color_virson_21 color_virson_22 color_virson_24');
			});
		// COLOUR AREA JS END
 
  
  })(jQuery);