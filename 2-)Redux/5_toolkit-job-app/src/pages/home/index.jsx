import { useSelector } from "react-redux";
import styles from "./home.module.scss";
import Loader from "../../components/loader/index";
import Error from "../../components/error/index";
import Card from "../../components/card";

const Home = () => {
  const { isLoading, error, jobs } = useSelector((store) => store.jobReducer);

  console.log("store'dan gelen", jobs);
  /*
   * Sorun:
    Bir dizi içerisindeji verileri status değerlerine göre gruplandırarak kategorize edilmiş diziler oluşturmak istiyorum
    
   * Çözüm:
    Reduce dizi methodunu kullanarak dizi içerisindeki job nesnelerini status değerlerine göre gruplandırmak  
   */
  const grouped = jobs.reduce((grouped, job) => {
    // oluşturuğumuz nesnede status'e karşılık gelen dizi yoksa oluştur
    if (!grouped[job.status]) {
      grouped[job.status] = [];
    }

    // iş'in status değerine karşılık gelen diziye işi pushla
    grouped[job.status].push(job);

    // nesnesinin son halini return et
    return grouped;
  }, {});

  if (isLoading)
    return (
      <div className={styles.layout}>
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className={styles.layout}>
        <Error message={error} />
      </div>
    );

  return (
    <div className={styles.layout}>
      {/*
      * Sorun:
      Grouped nesnesi içerisindeki bütün dizileri dönüp ekrana basma

      * Çözüm
      Object.keys() methodu ile nesnein anahtarlarından oluşan bir dizi oluşturup o diziyi döndük
      */}
      <div className={styles.stack}>
        {Object.keys(grouped).map((status) => (
          <div className={styles.group}>
            <h1>{status}</h1>

            <div className={styles.list}>
              {grouped[status].map((job, key) => (
                <Card job={job} key={key} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
