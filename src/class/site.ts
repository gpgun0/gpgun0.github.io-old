import axios from "axios";
import * as THREE from "three";

class SiteType {
  constructor() {}
  static forest; // 5
  static building; // 8
  static factory; // 9
  static school; // 10
  static road; // 1z4
  static river; // 17
  static downstream; // 19
  static waterSupply; // 21
  static park; // 22
  static others;
}

class SiteTypeExtension extends SiteType {
  static all(): Array<SiteType> {
    return [
      SiteType.forest,
      SiteType.building,
      SiteType.factory,
      SiteType.school,
      SiteType.road,
      SiteType.river,
      SiteType.downstream,
      SiteType.waterSupply,
      SiteType.park,
      SiteType.others,
    ];
  }
  static parse(jibun: string): SiteType {
    if (!jibun) {
      return SiteType.others;
    }

    switch (jibun[jibun.length - 1]) {
      case "임":
        return SiteType.forest;
      case "대":
        return SiteType.building;
      case "장":
        return SiteType.factory;
      case "학":
        return SiteType.school;
      case "도":
        return SiteType.road;
      case "천":
        return SiteType.river;
      case "유":
        return SiteType.downstream;
      case "수":
        return SiteType.waterSupply;
      case "공":
        return SiteType.park;
      default:
        return SiteType.others;
    }
  }
}

class Site {
  private static instance;

  private id: string;
  private address: string;
  private jibun: string;
  private type: string;
  private coordinates: Array<THREE.Vector2>;

  constructor(id, address, jibun, type, coordinates) {
    if (Site.instance) return Site.instance;
    this.id = id;
    this.address = address;
    this.jibun = jibun;
    this.type = type;
    this.coordinates = coordinates;
    Site.instance = this;
  }

  static fromJson(json: Map<string, any>, origin: THREE.Vector2) {
    const jibun = json["jibun"];

    return new Site(
      json["id"],
      json["address"],
      json["jibun"],
      json["jibun"],
      new THREE.Vector2(1, 2)
    );
  }

  async loadCircle(origin, radius) {
    const response = await axios.get(
      `http://drivers-high.ulagbulag.io:5050/router/map/circular/` +
        `${origin.y}/${origin.x}/${radius}`
    );
    try {
      const json = response.data;
      return json["features"]
        .map((e: any) => e)
        .map((e: any) => Site.fromJson(e, origin));
    } catch (e) {
      return [];
    }
  }
}
