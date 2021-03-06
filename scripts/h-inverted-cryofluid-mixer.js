const invertedCryofluidMixer = extendContent(GenericCrafter, "h-inverted-cryofluid-mixer", {
  load(){
    this.super$load();
    this.topRegion = Core.atlas.find(this.name + "-top");
    this.liquidRegion = Core.atlas.find(this.name + "-liquid");
  },
	draw(tile){
    this.super$draw(tile);
    entity = tile.ent();
    
    Draw.color(this.outputLiquid.liquid.color);
    Draw.alpha(tile.entity.liquids.get(this.outputLiquid.liquid) / this.liquidCapacity);
    Draw.rect(this.liquidRegion, tile.drawx(), tile.drawy());
    Draw.color();
    
    Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
	},
	generateIcons(){
		return [
			Core.atlas.find(this.name),
			Core.atlas.find(this.name + "-top")
		];
	}
});
invertedCryofluidMixer.liquidCapacity = 10;
