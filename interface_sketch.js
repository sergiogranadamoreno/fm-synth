
var attack = 10;
var decay = 500;
var sustain = 95;
var release = 1000;

var mod_attack = 10;
var mod_decay = 10;
var mod_sustain = 90;
var mod_release = 600;

var cm_ratio = 1;
var depth = 40;
var glide = 10;

var envmod = 0;
var dsp = 0;

var lfo = 0.01;
var lfo_depth = 0.1;
var filterq = 64;
var pan = 1;

var velocity = 15;

var a = new Interface.Panel({
	useRelativeSizesAndPositions: true,
});
/*
var label1 = new Interface.Label({
  value:"FM Synthesizer with LFO",
  hAlign:'left',
  size: 15,
  bounds:[0, 0, 1, .1],
});

var label2 = new Interface.Label({
  value:"by Sergio Granada Moreno",
  hAlign:'left',
  size: 15,
  bounds:[0, 0.04, 1, .1],
});
*/
var c1 = new Interface.Slider({
  bounds:[.75,.03,.035,.45],
  min:1, max:1000,
  value:10,
  fill:'#333', background:'#111',
  onvaluechange: function() {attack = this.value; parent.updateSlider_attack(attack);},
  label:"atack",
});

var c2 = new Interface.Slider({
  bounds:[.80,.03,.035,.45],
  min:1, max:2000,
  value:500,
  fill:'#333', background:'#111',
  onvaluechange: function() { decay = this.value; parent.updateSlider_decay(decay);},
  label:'decay',
});
var c3 = new Interface.Slider({
  bounds:[.85,.03,.035,.45],
  min:0, max:100,
  value:90,
  fill:'#333', background:'#111',
  onvaluechange: function() { sustain = this.value; parent.updateSlider_sustain(sustain);},
  label:'sustain',
});
var c4 = new Interface.Slider({
  bounds:[.90,.03,.035,.45],
  min:0, max:10000,
  value:600,
  fill:'#333', background:'#111',
  onvaluechange: function() { release = this.value; parent.updateSlider_release(release);},
  label:'release',
});

var d1 = new Interface.Slider({
  bounds:[.75,.51,.035,.45],
  min:1, max:1000,
  value:10,
  fill:'#333', background:'#111',
  onvaluechange: function() { mod_attack = this.value; parent.updateSlider_modattack(mod_attack);},
  label:'mod_a',
});
var d2 = new Interface.Slider({
  bounds:[.80,.51,.035,.45],
  min:1, max:200,
  value:10,
  fill:'#333', background:'#111',
  onvaluechange: function() { mod_decay = this.value; parent.updateSlider_moddecay(mod_decay);},
  label:'mod_d',
});
var d3 = new Interface.Slider({
  bounds:[.85,.51,.035,.45],
  min:0, max:100,
  value:95,
  fill:'#333', background:'#111',
  onvaluechange: function() { mod_sustain = this.value; parent.updateSlider_modsustain(mod_sustain);},
  label:'mod_s',
});
var d4 = new Interface.Slider({
  bounds:[.90,.51,.035,.45],
  min:0, max:5000,
  value:1000,
  fill:'#333', background:'#111',
  onvaluechange: function() { mod_release = this.value; parent.updateSlider_modrelease(mod_release);},
  label:'mod_r',
});

var cle1 = new Interface.Label({ 
  bounds:[.4,.1,.4,.2],
  hAlign:'center',
  value:1
}); 

var e1 = new Interface.Crossfader({
  isVertical:false,
  bounds:[.50,.03,.20,.065],
  min:0, max:2,
  value:1,
  fill:'#333', background:'#111',
  crossfaderWidth:10,
  onvaluechange: function() { cm_ratio = this.value; parent.updateSlider_cm_ratio(cm_ratio);cle1.setValue(cm_ratio);},
  label:'cm_ratio',
  
});

var cle2 = new Interface.Label({ 
  bounds:[.4,.23,.4,.2],
  hAlign:'center',
  value:40
});

var e2 = new Interface.Slider({
  isVertical:false,
  bounds:[.50,.15,.20,.065],
  min:0, max:2000,
  value:40,
  fill:'#333', background:'#111',
  onvaluechange: function() { depth = this.value; parent.updateSlider_depth(depth);cle2.setValue(depth);},
  label:'depth',
  
});

var cle3 = new Interface.Label({ 
  bounds:[.4,.36,.4,.2],
  hAlign:'center',
  value:10
});

var e3 = new Interface.Slider({
  isVertical:false,
  bounds:[.50,.28,.20,.065],
  min:10, max:5000,
  value:10,
  fill:'#333', background:'#111',
  onvaluechange: function() { glide = this.value; parent.updateSlider_glide(glide);cle3.setValue(glide);},
  label:'glide',
  
});

var f1 = new Interface.Button({ 
  bounds:[.94,.51,.04,.08], 
  onvaluechange: function() { envmod = this.value; parent.updateSlider_envmod(envmod);}, 
  label:'envmod'  
});

var f2 = new Interface.Button({ 
  bounds:[.94,.03,.04,.08], 
  onvaluechange: function() { dsp = this.value; parent.toggleTransport(dsp);}, 
  fill: '#820a27',
  label:'dsp'  
});

var clg1 = new Interface.Label({ 
  bounds:[.4,.58,.4,.2],
  hAlign:'center',
  value:0.01
});

var g1 = new Interface.Crossfader({
  isVertical:false,
  bounds:[.50,.51,.20,.065],
  min:0.01, max:10,
  value:0.01,
  fill:'#333', background:'#111',
  crossfaderWidth:10,
  onvaluechange: function() { lfo = this.value; parent.updateSlider_lfo(lfo);clg1.setValue(lfo);},
  label:'lfo',
  
});

var clg2 = new Interface.Label({ 
  bounds:[.4,.70,.4,.2],
  hAlign:'center',
  value:0.1
});
var g2 = new Interface.Slider({
  isVertical:false,
  bounds:[.50,.63,.20,.065],
  min:0, max:5,
  value:0.1,
  fill:'#333', background:'#111',
  onvaluechange: function() { lfo_depth = this.value; parent.updateSlider_lfo_depth(lfo_depth);clg2.setValue(lfo_depth);},
  label:'lfo_depth',
  
});

var clg3 = new Interface.Label({ 
  bounds:[.4,.82,.4,.2],
  hAlign:'center',
  value:64
});
var g3 = new Interface.Crossfader({
  isVertical:false,
  bounds:[.50,.75,.20,.065],
  min:0, max:100,
  value:64,
  fill:'#333', background:'#111',
  crossfaderWidth:10,
  onvaluechange: function() { filterq = this.value; parent.updateSlider_filterq(filterq);clg3.setValue(filterq);},
  label:'filterq',
  
});

var clg4 = new Interface.Label({ 
  bounds:[.4,.94,.4,.2],
  hAlign:'center',
  value:1
});
var g4 = new Interface.Crossfader({
  isVertical:false,
  bounds:[.50,.87,.20,.065],
  min:-50, max:50,
  value:1,
  fill:'#333', background:'#111',
  crossfaderWidth:10,
  onvaluechange: function() { pan = this.value; parent.updateSlider_pan(pan);clg4.setValue(pan);},
  label:'pan',
  
});
//var d = new Interface.Slider({
  //bounds:[.825,0,.15,1],
  //target:velocity, key:'maxVelocity',
  //min:.5, max:20,
  //value:15,
  //fill:'#333', background:'#111',
  //label:'velocity',
//});

a.background = 'transparent';
a.add(c1,c2,c3,c4,d1,d2,d3,d4,e1,e2,e3,f1,f2,g1,g2,g3,g4,cle1,cle2,cle3,clg1,clg2,clg3,clg4);