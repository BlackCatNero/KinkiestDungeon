/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */


AddModel({
	Name: "Petsuit",
	Folder: "Petsuit",
	Parent: "Petsuit",
	TopLevel: true,
	Categories: ["Restraints", "Cosplay"],
	Restraint: true,
	AddPose: ["HideArms", "EncaseArmLeft", "EncaseArmRight", "EncaseTorsoLower", "EncaseLegs", "ForceKneel"],
	HideLayerGroups: ["PetsuitArms"],
	Layers: ToLayerMap([
		{ Name: "Arms", Layer: "BindForeArms", Pri: -30,
			Invariant: true,
			Poses: ToMap(["Front"]),
		},
		{ Name: "Legs", Layer: "WrappingLegsOver", Pri: 50,
			Poses: ToMap(["KneelClosed", "Kneel", "Hogtie"]),
			GlobalDefaultOverride: ToMap(["KneelClosed", "Hogtie"]),
		},
		{ Name: "LeftLegs", Layer: "WrappingLegsOver2", Pri: 50,
			Poses: ToMap(["KneelClosed", "Kneel"]),
			GlobalDefaultOverride: ToMap(["KneelClosed"]),
		},
	])
});
