(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"assign4_atlas_", frames: [[0,0,2000,1779],[0,1781,999,399],[1216,2105,213,160],[1431,2105,213,160],[1431,1781,213,160],[1431,1943,213,160],[1001,2105,213,160],[1216,1781,213,160],[1216,1943,213,160],[1001,1781,213,160],[1646,1781,213,160],[1001,1943,213,160],[1646,2105,213,160],[0,2182,213,160],[1646,1943,213,160]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._82satellitehighqualitypng = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animationmeteorclipart999x399 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Earth_01 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Earth_02 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Earth_03 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Earth_04 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Earth_05 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Earth_06 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Earth_07 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Earth_08 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Earth_09 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Earth_10 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Earth_11 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Earth_12 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Earth_13 = function() {
	this.spriteSheet = ss["assign4_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.animationmeteorclipart999x399();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1,0.251);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,100,100), null);


(lib.sym_sat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._82satellitehighqualitypng();
	this.instance.parent = this;
	this.instance.setTransform(97.1,0,0.049,0.044,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.1,77.7);


(lib.sym_comet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


// stage content:
(lib.assign4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 16
	this.instance = new lib.sym_sat("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(545.6,219.2,1,1,0,0,0,48.6,38.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:580.2,y:304.8},0).wait(1).to({x:620,y:320.6},0).wait(1).to({regX:66.4,regY:51.4,x:693.3,y:352},0).wait(1).to({regX:24.4,regY:-7.3,x:1364.7,y:345.4},0).wait(2).to({x:304.6,y:110},0).wait(1).to({x:-94.6,y:290.1},0).wait(1).to({x:381.1,y:163.4},0).wait(1).to({x:380.1,y:181.1},0).wait(1).to({x:450.2,y:226.3},0).wait(1).to({x:521.4,y:252.5},0).wait(1).to({x:533.6,y:266.1},0).wait(2));

	// comet
	this.instance_1 = new lib.sym_comet("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1391.3,62.9,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:378.3,y:770.7},13).wait(1));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3035A6").s().p("AgTA3QgEgEgCgHQgCgFAAgKIAAgHIABgSIAAgfIgCAAIgEAAIgDAAQgFAAAAgDQAAgEAEABIADAAIAHAAIAAgKQAZgJATgMIgBAdIAAADIANgBIADAAQAAAAABAAQABAAAAABQABAAAAABQAAABAAAAQAAAEgEAAIgDgBIgKAAIgCAAIAAARIAAAhIAAASIABAJQAAABABABQAAAAAAAAQABABAAAAQABAAAAAAQAEAAADgEQAEgEACgEQABgFADgBQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAADgDAFQgDAFgEAEQgLAIgQABQgOAAgJgKg");
	this.shape.setTransform(368.1,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3035A6").s().p("AgWA/IAAggIABgdIgBgOIAAgQIAAgEIAsAAIAAADIAAAOIAAAUIAAAgIAAASIAAAIgAgWgyQAAgMAWAAQAXAAAAAMQAAAGgGADQgHADgKAAQgWAAAAgMg");
	this.shape_1.setTransform(360.7,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3035A6").s().p("AgTA3QgEgEgCgHQgCgFAAgKIAAgHIABgSIAAgfIgCAAIgEAAIgDAAQgFAAAAgDQAAgEAEABIADAAIAHAAIAAgKQAZgJATgMIgBAdIAAADIANgBIADAAQAAAAABAAQABAAAAABQABAAAAABQAAABAAAAQAAAEgEAAIgDgBIgKAAIgCAAIAAARIAAAhIAAASIABAJQAAABABABQAAAAAAAAQABABAAAAQABAAAAAAQAEAAADgEQAEgEACgEQABgFADgBQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAADgDAFQgDAFgEAEQgLAIgQABQgOAAgJgKg");
	this.shape_2.setTransform(353.7,32.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3035A6").s().p("AAAA6QgHgDgHgHIAAALIgtAAIAAgEIAAgqIAAgeIAAgrIAtAAIAAAhQAGgFAIgEQAGgCAHgBQASAAAOANQAPAOAAAWQAAAYgQAPQgNAMgRAAQgIAAgGgDgAgCgdQgGADgGAGIAAA8IAJAJQAGAFAGAAQAEAAABgEIAAgJIAAg6IAAgDIgBgKQgBgCgDAAQgEAAgFADg");
	this.shape_3.setTransform(343.1,32.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3035A6").s().p("AgrAxIABgFIAAgSIAAgfIAAgkIgBgFIAtAAIAAASIAOgNQAIgHAIAAQAGAAACACQAEACAAAEQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgCACgDAAIgEgCIgGgCQgHABgGAEQgFAFgIAJIAAAhIABAjg");
	this.shape_4.setTransform(332,33.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3035A6").s().p("AgeA3QgUgKgIgUQgFgMAAgNQAAgPAIgPQAKgRATgJQAMgHAOAAQAOAAANAHQATAIAKASQAIAOAAAQQAAAOgGANQgKATgTALQgOAGgPAAQgQAAgOgIgAgGg4IgBA4IABAvIAAALIAGABQASgBAPgKQAOgKAHgPQAEgLAAgMQAAgOgHgOQgKgQgQgIQgMgFgNAAIgGABg");
	this.shape_5.setTransform(319.8,32.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3035A6").s().p("AggAmQgJgIgEgLQgEgJAAgKQAAgIADgJQAEgJAGgHQAHgIAKgEQAKgEAJAAQAQAAAOAJQAUAPAAAcIgVAAIgaAAIgLAAIAAAbIABAKQACAEAGAAQAKAAAKgFQAKgGAHgKIAEgEIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABACQAAAEgGAGQgHAIgMAFQgLAFgLAAQgSAAgOgMgAgHgoQgBADAAAKIAAAZIAKABIAMgBIAAgZIgBgKIgBgDQgDgEgHAAQgHAAgCAEg");
	this.shape_6.setTransform(303,33.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3035A6").s().p("AgTA3QgEgEgCgHQgCgFAAgKIAAgHIABgSIAAgfIgCAAIgEAAIgDAAQgFAAAAgDQAAgEAEABIADAAIAHAAIAAgKQAZgJATgMIgBAdIAAADIANgBIADAAQAAAAABAAQABAAAAABQABAAAAABQAAABAAAAQAAAEgEAAIgDgBIgKAAIgCAAIAAARIAAAhIAAASIABAJQAAABABABQAAAAAAAAQABABAAAAQABAAAAAAQAEAAADgEQAEgEACgEQABgFADgBQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAADgDAFQgDAFgEAEQgLAIgQABQgOAAgJgKg");
	this.shape_7.setTransform(293.8,32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3035A6").s().p("AgWA/IAAggIABgdIgBgOIAAgQIAAgEIAsAAIAAADIAAAOIAAAUIAAAgIAAASIAAAIgAgWgyQAAgMAWAAQAXAAAAAMQAAAGgGADQgHADgKAAQgWAAAAgMg");
	this.shape_8.setTransform(286.4,32.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3035A6").s().p("AgVA8IAAgEIAAgOIAAgaIAAggIAAgSIAAgTIAAgGIAsAAIAAAEIAAAgIAAANIAAAXIAAAsIAAADg");
	this.shape_9.setTransform(279.8,32.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3035A6").s().p("AgWA8IAAgEIABgOIAAgaIAAggIAAgSIAAgTIAAgGIArAAIAAAEIAAAgIAAANIAAAXIAAAsIAAADg");
	this.shape_10.setTransform(273.3,32.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3035A6").s().p("AggAmQgJgIgEgLQgEgJAAgKQAAgIADgJQAEgJAGgHQAHgIAKgEQAKgEAJAAQAQAAAOAJQAUAPAAAcIgVAAIgaAAIgLAAIAAAbIABAKQACAEAGAAQAKAAAKgFQAKgGAHgKIAEgEIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABACQAAAEgGAGQgHAIgMAFQgLAFgLAAQgSAAgOgMgAgHgoQgBADAAAKIAAAZIAKABIAMgBIAAgZIgBgKIgBgDQgDgEgHAAQgHAAgCAEg");
	this.shape_11.setTransform(264.6,33.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3035A6").s().p("AgTA3QgFgEgBgHQgCgFAAgKIAAgHIAAgSIAAgfIgCAAIgDAAIgEAAQgEAAAAgDQAAgEAEABIADAAIAGAAIAAgKQAbgJARgMIgBAdIAAADIAPgBIACAAQAAAAABAAQABAAAAABQABAAAAABQAAABAAAAQAAAEgEAAIgDgBIgKAAIgDAAIAAARIAAAhIABASIABAJQAAABABABQAAAAAAAAQABABAAAAQABAAABAAQADAAADgEQADgEACgEQACgFADgBQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAADgDAFQgDAFgEAEQgLAIgQABQgPAAgIgKg");
	this.shape_12.setTransform(255.4,32.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3035A6").s().p("AgsArQgOgKAAgQQAAgPALgHQANgLASAAQAIAAAGACIAMAFIAAgLIgBgOQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgFgLAAQgSAAgKALQgEAFgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgGANgFQAMgGAUAAQAgAAANAKQAGAEABAFQACAGAAANIAAAiQAAAKABAFQABAFADAFIgxAAIAAgJQgIAGgHACQgIADgIAAQgNAAgKgHgAgNgEQgBACAAAJIAAAVIABAJQAAAEAGAAQAEAAAEgDQAFgCAEgEIAAgjQgKgFgGAAQgFAAgCAEg");
	this.shape_13.setTransform(244.9,33.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3035A6").s().p("AgkA1QgLgGAAgFIABgBIACgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAIAHAJAEQAJAFAJAAQAKAAAAgHQAAgEgDgFIgRgTQgRgTgGgHQgHgMAAgLQAAgQAOgLQAPgJATgBQAPAAAMAHQAFABADADQADAEAAABIgBACIgCABIgFgDQgEgEgIgDQgHgDgIAAQgEAAgCACQgCACgBADQABADADAGQACAFAJAIQAZAcAGAIQAGAKAAAKQAAAIgEAHQgFAIgHAEQgOAJgVgBQgTAAgOgKg");
	this.shape_14.setTransform(233.3,32.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3035A6").s().p("AgfAqIgFgDQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAQACAAACADQAFAEAIADQAIADAHAAIAEgBQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIgCgFIgJgLQgTgUgFgHQgGgJAAgHQAAgHAEgGQAEgGAHgEQALgHAOAAQALAAAMAEQAJAEAAAEIgBADIgDABQgBAAgFgEQgJgGgLAAQgEAAgBABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAADADAEIAOAQIAOAOIAGAGQAFAIAAAIQAAAOgNAIQgLAHgPAAQgRAAgOgIg");
	this.shape_15.setTransform(219.1,33.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3035A6").s().p("Ag0AmQgDgEgBgFQgBgGAAgJIAAgUIAAgNIAAgdIAtAAIgBAsIAAAQIAAALQAAAKACACQABACAEABQAEAAAEgCIAMgIIAAgMIAAgfIgBgeIAAgDIAtAAIAABEIAAAbIgtAAIAAgMQgLAIgIADQgJADgKAAQgSAAgJgLg");
	this.shape_16.setTransform(207.9,34);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3035A6").s().p("AgdAoQgKgHgGgMQgEgKAAgLQAAgVAQgOQAPgOASAAQAOAAANAIQAMAHAGAMQAFALAAAMQAAAIgDAJQgDAIgFAHQgJAJgKAEQgKAEgJAAQgRAAgNgKgAgCgrIAABXIADAAQAMAAALgGQALgHAGgLQAEgJAAgLQAAgUgQgNQgNgLgOAAIgEABg");
	this.shape_17.setTransform(195.8,33.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3035A6").s().p("AAOAxIAAgYIAAgSIAAgaIAAgLIgBgEQgBgCgFAAQgEAAgEACIgLAHIAAAEIAAAYIAAATIAAAZIAAAEIgtAAIAAgiIAAgWIAAgUIAAgTIAtAAIAAAMQAKgHAJgDQAKgEAJAAQANAAAIAGQAHAEACAGQACAHAAAOIAAAoIAAAUg");
	this.shape_18.setTransform(183.6,33.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3035A6").s().p("AgcAoQgLgHgFgMQgFgKAAgLQAAgVAQgOQAPgOASAAQAPAAAMAIQAMAHAGAMQAFALAAAMQAAAIgDAJQgDAIgGAHQgHAJgMAEQgJAEgKAAQgPAAgNgKgAgBgrIAABXIACAAQAMAAAMgGQAKgHAFgLQAFgJAAgLQAAgUgQgNQgNgLgPAAIgCABg");
	this.shape_19.setTransform(171.4,33.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3035A6").s().p("AgrAxIAAgFIAAgSIAAgfIAAgkIAAgFIAsAAIAAASIAPgNQAIgHAJAAQAEAAAEACQADACAAAEQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgCACgDAAIgEgCIgHgCQgFABgGAEQgHAFgHAJIAAAhIAAAjg");
	this.shape_20.setTransform(162.5,33.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3035A6").s().p("AAOA8IAAg2IgBgbQAAgFgGAAQgEAAgEADIgMAHIAAAWIAAAlIABARIgtAAIAAglIAAgqIgBgkIABgEIAsAAIAAADIAAAPIAAAJIAAAKIANgJQANgGANgBQAKABAHADQAIADADAGQAEAHAAASIAAANIAAARIABAeg");
	this.shape_21.setTransform(150.3,32.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3035A6").s().p("AggAlQgQgPAAgWQAAgWARgOQAOgNAUAAQAQAAANAIIAIAHQAEAEAAACIgBADIgDABQgCAAgCgFQgEgGgJgEQgJgEgIAAQgFAAgBADQgBADAAAJIAAA6IAAAGQAAAFABACQABACAEAAQAKAAAKgHQAKgGAHgLQACgDACAAIACABIABADQAAADgFAGQgFAFgHAFQgOAJgPAAQgVAAgOgNg");
	this.shape_22.setTransform(138.7,33.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3035A6").s().p("AAOAxIAAgYIAAgSIAAgaIAAgLIgBgEQgBgCgFAAQgEAAgEACIgLAHIAAAEIAAAYIAAATIAAAZIAAAEIgtAAIAAgiIAAgWIAAgUIAAgTIAtAAIAAAMQAKgHAJgDQAKgEAJAAQANAAAIAGQAHAEACAGQACAHAAAOIAAAoIAAAUg");
	this.shape_23.setTransform(126.6,33.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3035A6").s().p("AgeAyQgDgBAAgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIADgBIAGACIAEABQAFAAADgCIAIgIIgLgRQghgzgMgOIA4AAIAMAWIANAWQASgbAIgOIADgFIACgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIABACIgCADIggAvIgPAXIgNARQgEAEgFADQgFACgFAAQgEAAgEgCg");
	this.shape_24.setTransform(114.3,34);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3035A6").s().p("AgfAqIgFgDQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAQACAAACADQAFAEAIADQAIADAHAAIAEgBQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgCgCgDIgJgLQgTgUgFgHQgGgJAAgHQAAgHAEgGQAEgGAHgEQALgHAOAAQALAAAMAEQAJAEAAAEIgBADIgDABQgBAAgFgEQgJgGgLAAQgEAAgBABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAADADAEIAOAQIAOAOIAGAGQAFAIAAAIQAAAOgNAIQgLAHgPAAQgRAAgOgIg");
	this.shape_25.setTransform(104.7,33.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3035A6").s().p("AgcAoQgLgHgFgMQgFgKAAgLQAAgVAQgOQAPgOASAAQAPAAAMAIQAMAHAGAMQAFALAAAMQAAAIgDAJQgDAIgGAHQgHAJgMAEQgJAEgKAAQgPAAgNgKgAgBgrIAABXIACAAQAMAAAMgGQAKgHAFgLQAFgJAAgLQAAgUgQgNQgNgLgPAAIgCABg");
	this.shape_26.setTransform(94.9,33.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3035A6").s().p("AggAmQgJgIgEgLQgEgJAAgKQAAgIADgJQAEgJAGgHQAHgIAKgEQAKgEAJAAQAQAAAOAJQAUAPAAAcIgVAAIgaAAIgLAAIAAAbIABAKQACAEAGAAQAKAAAKgFQAKgGAHgKIAEgEIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABACQAAAEgGAGQgHAIgMAFQgLAFgLAAQgSAAgOgMgAgHgoQgBADAAAKIAAAZIAKABIAMgBIAAgZIgBgKIgBgDQgDgEgHAAQgHAAgCAEg");
	this.shape_27.setTransform(84.1,33.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3035A6").s().p("AgWA7QgLgEgJgIQgLgLgGgNQgEgMAAgLQAAgUANgSQAJgLANgHQAOgGAOgBQAZABATARQAJAJAAACIgBADIgDABQgCAAgCgEQgSgXgbAAIgGAAIAAA+IAAA1IAGAAQAKAAAJgDQAXgJALgWQAEgJABgKIguAAIgHAAQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgCAFAAIAFAAIAzAAQgBAZgQASQgJAKgNAFQgMAGgNgBQgLABgLgFg");
	this.shape_28.setTransform(71.9,32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},13).wait(1));

	// Layer 13
	this.instance_2 = new lib.Earth_13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(497,266);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).wait(1));

	// Layer 12
	this.instance_3 = new lib.Earth_12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(497,266);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 11
	this.instance_4 = new lib.Earth_11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(497,266);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 10
	this.instance_5 = new lib.Earth_10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(497,266);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 9
	this.instance_6 = new lib.Earth_09();
	this.instance_6.parent = this;
	this.instance_6.setTransform(497,266);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({_off:true},1).wait(4));

	// Layer 8
	this.instance_7 = new lib.Earth_08();
	this.instance_7.parent = this;
	this.instance_7.setTransform(497,266);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer 7
	this.instance_8 = new lib.Earth_07();
	this.instance_8.parent = this;
	this.instance_8.setTransform(497,266);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({_off:false},0).to({_off:true},1).wait(6));

	// Layer 6
	this.instance_9 = new lib.Earth_06();
	this.instance_9.parent = this;
	this.instance_9.setTransform(497,266);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({_off:true},1).wait(7));

	// Layer 5
	this.instance_10 = new lib.Earth_05();
	this.instance_10.parent = this;
	this.instance_10.setTransform(497,266);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).to({_off:true},1).wait(8));

	// Layer 4
	this.instance_11 = new lib.Earth_04();
	this.instance_11.parent = this;
	this.instance_11.setTransform(497,266);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({_off:true},1).wait(9));

	// Layer 3
	this.instance_12 = new lib.Earth_03();
	this.instance_12.parent = this;
	this.instance_12.setTransform(497,266);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({_off:false},0).to({_off:true},1).wait(10));

	// Layer 2
	this.instance_13 = new lib.Earth_02();
	this.instance_13.parent = this;
	this.instance_13.setTransform(497,266);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({_off:false},0).to({_off:true},1).wait(11));

	// Layer 1
	this.instance_14 = new lib.Earth_01();
	this.instance_14.parent = this;
	this.instance_14.setTransform(497,266);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(703.1,372.9,1378.3,245.2);
// library properties:
lib.properties = {
	id: 'E06687358FEC8949AADE201A2A685AC2',
	width: 1280,
	height: 720,
	fps: 10,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/assign4_atlas_.png", id:"assign4_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E06687358FEC8949AADE201A2A685AC2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;