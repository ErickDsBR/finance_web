import styles from "./Navigation.module.css";

interface hederitens {
  id: string;
  title: string;
  link: string;
}

const herder: hederitens[] = [
  {
    id: "Sobre",
    title: "Sobre",
    link: "../../pages/sobre/sobre.tsx",
  },
  {
    id: "Funcionalidades",
    title: "Funcionalidades",
    link: "/funcionalidades",
  },
  {
    id: "Download",
    title: "Download",
    link: "/download",
  },
];

export function Nav() {
  return (
    <div className={styles.nav_container}>
      {herder.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className={styles.nav_link}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}
