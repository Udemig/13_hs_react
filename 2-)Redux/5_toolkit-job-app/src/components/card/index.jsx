import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import { MdDelete as Delete, MdEdit as Edit } from "react-icons/md";
import { FaCalendarAlt as Calendar, FaMapMarkerAlt as Marker } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/tr";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { deleteJob } from "../../redux/slices/jobSlice";
import { toast } from "react-toastify";

// Plugin'i aktif et
dayjs.extend(relativeTime);

// Türkçe dilini ayarla
dayjs.locale("tr");

const Card = ({ job }) => {
  const dispatch = useDispatch();

  const date =
    job.status === "Devam Ediyor"
      ? dayjs(job.date).fromNow() + " başvuruldu"
      : job.status === "Reddedildi"
      ? dayjs(job.rejection_date).format("DD-MMMM") + "'da rededildi"
      : dayjs(job.interview_date).format("DD-MM-YYYY HH:mm") + "'de mülakat";

  const handleDelete = () => {
    api
      .delete(`/jobs/${job.id}`)
      .then(() => {
        dispatch(deleteJob(job.id));
        toast.success("Başvuru silindi");
      })
      .catch(() => toast.error("Silme işlemi başarısız"));
  };

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

          <button onClick={handleDelete}>
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
