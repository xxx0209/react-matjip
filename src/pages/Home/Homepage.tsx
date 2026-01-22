import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * 카테고리
 * - label : 화면에 보여줄 텍스트 (이모지 포함)
 * - value : 실제 필터 로직에 사용할 값
 */
const categories = [
  { label: "전체📄", value: "전체" },
  { label: "한식🍚", value: "한식" },
  { label: "양식🍝", value: "양식" },
  { label: "고기/구이🍗", value: "고기/구이" },
  { label: "씨푸드🦞", value: "씨푸드" },
  { label: "일중/세계음식🌍", value: "일중/세계음식" },
  { label: "비건🥕", value: "비건" },
  { label: "카페/디저트🍰", value: "카페/디저트" },
];

/**
 * 더미 맛집 데이터
 */
const dummyStores = [
  { id: 1, name: "가게이름", category: "한식", image: "/images/sample1.jpg" },
  { id: 2, name: "가게이름", category: "고기/구이", image: "/images/sample2.jpg" },
  { id: 3, name: "가게이름", category: "씨푸드", image: "/images/sample3.jpg" },
  { id: 4, name: "가게이름", category: "양식", image: "/images/sample4.jpg" },
  { id: 5, name: "가게이름", category: "카페/디저트", image: "/images/sample5.jpg" },
  { id: 6, name: "가게이름", category: "일중/세계음식", image: "/images/sample6.jpg" },
];

export default function HomePage() {
  const navigate = useNavigate();

  /** 선택된 카테고리 */
  const [selectedCategory, setSelectedCategory] = useState("전체");

  /*
   * 카테고리 필터링
   */
  const filteredStores = dummyStores.filter((store) => {
    if (selectedCategory === "전체") return true;
    return store.category === selectedCategory;
  });

  return (
    <div className="page-container">
      {/* =========================
          카테고리 필터
         ========================= */}
      <section className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={cat.value === selectedCategory ? "selected" : ""}
            onClick={() => setSelectedCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* =========================
          맛집 리스트
         ========================= */}
      <section className="store-grid">
        {filteredStores.map((store) => (
          <div
            key={store.id}
            className="store-card"
            onClick={() => navigate(`/store/${store.id}`)}
          >
            <img src={store.image} alt={store.name} />
            <p>{store.name}</p>
          </div>
        ))}
      </section>

      {/* =========================
          페이징
         ========================= */}
      <section className="pagination">
        페이징 처리 파트
      </section>
    </div>
  );
}
