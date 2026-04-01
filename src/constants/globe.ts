import { Arc, Marker } from "@/components/ui/cobe-globe";

export const GLOBE_ARCS: Arc[] = [
  { id: "del-dxb", from: [28.6139, 77.2090], to: [25.2048, 55.2708], label: "Delhi → Dubai" },
  { id: "del-sgn", from: [28.6139, 77.2090], to: [10.8231, 106.6297], label: "Delhi → Ho Chi Minh City" },
  { id: "del-bkk", from: [28.6139, 77.2090], to: [13.7563, 100.5018], label: "Delhi → Bangkok" },
  { id: "del-hkg", from: [28.6139, 77.2090], to: [22.3193, 114.1694], label: "Delhi → Hong Kong" },
  { id: "del-kul", from: [28.6139, 77.2090], to: [3.1390, 101.6869], label: "Delhi → Kuala Lumpur" },

  { id: "bom-lhr", from: [19.0760, 72.8777], to: [51.5074, -0.1278], label: "Mumbai → London" },
  { id: "bom-muc", from: [19.0760, 72.8777], to: [48.1351, 11.5820], label: "Mumbai → Munich" },
  { id: "bom-seoul", from: [19.0760, 72.8777], to: [37.5665, 126.9780], label: "Mumbai → Seoul" },
  { id: "bom-sin", from: [19.0760, 72.8777], to: [1.3521, 103.8198], label: "Mumbai → Singapore" },
  { id: "bom-paris", from: [19.0760, 72.8777], to: [48.8566, 2.3522], label: "Mumbai → Paris" },

  { id: "muc-vie", from: [48.1351, 11.5820], to: [48.2082, 16.3738], label: "Munich → Vienna" },
  { id: "auh-vie", from: [24.4539, 54.3773], to: [48.2082, 16.3738], label: "Abu Dhabi → Vienna" },
  { id: "auh-bom", from: [24.4539, 54.3773], to: [19.0760, 72.8777], label: "Abu Dhabi → Mumbai" },
  { id: "dxb-bom", from: [25.2048, 55.2708], to: [19.0760, 72.8777], label: "Dubai → Mumbai" },
  { id: "rome-muc", from: [41.9028, 12.4964], to: [48.1351, 11.5820], label: "Rome → Munich" },
  { id: "zur-muc", from: [47.3769, 8.5417], to: [48.1351, 11.5820], label: "Zurich → Munich" },
  { id: "del-ams", from: [28.6139, 77.2090], to: [52.3676, 4.9041], label: "Delhi → Amsterdam" },
  { id: "ams-paris", from: [52.3676, 4.9041], to: [48.8566, 2.3522], label: "Amsterdam → Paris" },
  { id: "kul-seoul", from: [3.1390, 101.6869], to: [37.5665, 126.9780], label: "KUL → ICN" },
];

export const GLOBE_MARKERS: Marker[] = [
  { id: "london", location: [51.5074, -0.1278] as [number, number], label: "London" },
  { id: "dubai", location: [25.2048, 55.2708] as [number, number], label: "Dubai" },
  { id: "paris", location: [48.8566, 2.3522] as [number, number], label: "Paris" },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], label: "Singapore" },
  { id: "bangkok", location: [13.7563, 100.5018] as [number, number], label: "Bangkok" },
  { id: "munich", location: [48.1351, 11.5820] as [number, number], label: "Munich" },
  { id: "amsterdam", location: [52.3676, 4.9041] as [number, number], label: "Amsterdam" },
  { id: "zurich", location: [47.3769, 8.5417] as [number, number], label: "Zurich" },
  { id: "vienna", location: [48.2082, 16.3738] as [number, number], label: "Vienna" },
  { id: "rome", location: [41.9028, 12.4964] as [number, number], label: "Rome" },
  { id: "abudhabi", location: [24.4539, 54.3773] as [number, number], label: "Abu Dhabi" },
  { id: "seoul", location: [37.5665, 126.9780] as [number, number], label: "Seoul" },
  { id: "hongkong", location: [22.3193, 114.1694] as [number, number], label: "Hong Kong" },
  { id: "hochiminh", location: [10.8231, 106.6297] as [number, number], label: "Ho Chi Minh City" },
  { id: "kualalumpur", location: [3.1390, 101.6869] as [number, number], label: "Kuala Lumpur" },
  { id: "delhi", location: [28.6139, 77.2090] as [number, number], label: "Delhi" },
  { id: "mumbai", location: [19.0760, 72.8777] as [number, number], label: "Mumbai" },
];

export const INDIAN_MARKERS: Marker[] = [
  { id: "delhi", location: [28.6139, 77.2090] as [number, number], label: "Delhi" },
  { id: "mumbai", location: [19.0760, 72.8777] as [number, number], label: "Mumbai" },
  { id: "vadodara", location: [22.3072, 73.1812] as [number, number], label: "Vadodara" },
  { id: "chennai", location: [13.0827, 80.2707] as [number, number], label: "Chennai" },
  { id: "kolkata", location: [22.5726, 88.3639] as [number, number], label: "Kolkata" },
  { id: "kochi", location: [9.9312, 76.2673] as [number, number], label: "Kochi" },
  { id: "srinagar", location: [34.0837, 74.7973] as [number, number], label: "Srinagar" },
  { id: "leh", location: [34.1526, 77.5770] as [number, number], label: "Leh" },
  { id: "bangalore", location: [12.9716, 77.5946] as [number, number], label: "Bangalore" },
  { id: "hyderabad", location: [17.3850, 78.4867] as [number, number], label: "Hyderabad" },
  { id: "jaipur", location: [26.9124, 75.7873] as [number, number], label: "Jaipur" },
  { id: "lucknow", location: [26.8467, 80.9462] as [number, number], label: "Lucknow" },
  { id: "guwahati", location: [26.1445, 91.7362] as [number, number], label: "Guwahati" },
  { id: "goa", location: [15.2993, 74.1240] as [number, number], label: "Goa" },
];

export const INDIAN_ARCS: Arc[] = [
  { id: "bdq-bom", from: [22.3072, 73.1812], to: [19.0760, 72.8777], label: "Vadodara → Mumbai" },
  { id: "bdq-del", from: [22.3072, 73.1812], to: [28.6139, 77.2090], label: "Vadodara → Delhi" },
  { id: "del-ccu", from: [28.6139, 77.2090], to: [22.5726, 88.3639], label: "Delhi → Kolkata" },
  { id: "del-sxr", from: [28.6139, 77.2090], to: [34.0837, 74.7973], label: "Delhi → Srinagar" },
  { id: "del-ixl", from: [28.6139, 77.2090], to: [34.1526, 77.5770], label: "Delhi → Leh" },
  { id: "bom-maa", from: [19.0760, 72.8777], to: [13.0827, 80.2707], label: "Mumbai → Chennai" },
  { id: "del-blr", from: [28.6139, 77.2090], to: [12.9716, 77.5946], label: "Delhi → Bangalore" },
  { id: "del-hyd", from: [28.6139, 77.2090], to: [17.3850, 78.4867], label: "Delhi → Hyderabad" },
  { id: "cok-hyd", from: [9.9312, 76.2673], to: [17.3850, 78.4867], label: "Kochi → Hyderabad" },
  { id: "cok-del", from: [9.9312, 76.2673], to: [28.6139, 77.2090], label: "Kochi → Delhi" },
  { id: "bdq-jai", from: [22.3072, 73.1812], to: [26.9124, 75.7873], label: "Vadodara → Jaipur" },
  { id: "lko-maa", from: [26.8467, 80.9462], to: [13.0827, 80.2707], label: "Lucknow → Chennai" },
  { id: "goi-bdq", from: [15.2993, 74.1240], to: [22.3072, 73.1812], label: "Goa → Vadodara" },
  { id: "bom-gau", from: [19.0760, 72.8777], to: [26.1445, 91.7362], label: "Mumbai → Guwahati" },
];