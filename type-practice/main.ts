// 地図上の位置を特定するための標準的な座標クラス

type MarketStatus = "disabled" | "active" | "pinned";

class Coordinates {
  #lat: number; // latitude(緯度)
  #lng: number; // longitude(経度)

  constructor(location?: { lat: number; lng: number }) {
    this.#lat = location?.lat ?? 0;
    this.#lng = location?.lng ?? 0;
  }

  get coordinates() {
    return {
      lat: this.#lat,
      lng: this.#lng,
    };
  }

  set coordinates(location) {
    this.#lat = location.lat;
    this.#lng = location.lng;
  }

  relocate = (newLat: number, newLng: number) => {
    this.#lat = newLat;
    this.#lng = newLng;
  };
}

class MapPin extends Coordinates {
  #marketStatus: MarketStatus;

  constructor(location?: {
    lat: number;
    lng: number;
    marketStatus?: MarketStatus;
  }) {
    super(location);
    this.#marketStatus = location?.marketStatus ?? "active";
  }

  disabled = () => {
    this.#marketStatus = "disabled";
  };

  isDisabled = () => {
    return this.#marketStatus === "disabled";
  };

  isActive = () => {
    return this.#marketStatus === "active";
  };

  isPinned = () => {
    return this.#marketStatus === "pinned";
  };
}

const pin = new MapPin({ lat: 20, lng: 30, marketStatus: "pinned" });
const pinLocation = pin.coordinates;
console.log(pinLocation);

pin.coordinates = { lat: 35, lng: 45 };
console.log(pin.coordinates);

type Person = {
  username: string;
  email: string;
  phone: number;
};

// type PersonKeyType = keyof Person;
// type PesonzValueType = Person[keyof Person];

type ValueType<T> = T[keyof T];
type PesonzValueType = ValueType<Person>;

type UserStatus = {
  active: boolean;
  inactive: boolean;
  pending: boolean;
};

type UserRecordType = Record<"active" | "inactive" | "pending", boolean>;
type UserRecordType2 = Record<string, boolean>;
