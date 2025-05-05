import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import { MdDelete as Delete, MdEdit as Edit } from "react-icons/md";
import { FaCalendarAlt as Calendar, FaMapMarkerAlt as Marker } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/tr";

// Plugin'i aktif et
dayjs.extend(relativeTime);

// Türkçe dilini ayarla
dayjs.locale("tr");

const Card = ({ job }) => {
  /*
    * Challange:
    Eğer iş mülakat aşamasındaysa 12 Şubat 2025 * 12:00 yazmalı
    Eğer iş devam ediyorsa 3 gün önce başvuruldu
    Eğer reddedildi 12 Şubat 2025 tarihinde rededildi
  */

  const date =
    job.status === "Devam Ediyor"
      ? dayjs(job.date).fromNow() + " başvuruldu"
      : job.status === "Reddedildi"
      ? dayjs(job.rejection_date).format("DD-MMMM") + "'da rededildi"
      : dayjs(job.interview_date).format("DD-MM-YYYY HH:mm") + "'de mülakat";

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div>
          <h1>
            <span>{job.company[0]}</span>
          </h1>

          <div className={styles.info}>
            <h2>{job.position}</h2>
            <h4>{job.company}</h4>
          </div>
        </div>

        <div className={styles.buttons}>
          <Link to={`/job/${job.id}`}>
            <button>
              <Edit />
            </button>
          </Link>
          <button>
            <Delete />
          </button>
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.body}>
        <p>
          <Marker />
          {job.location}
        </p>

        <div className={styles.bottom}>
          <span>
            <Calendar />
            {date}
          </span>
          <span>{job.type}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
