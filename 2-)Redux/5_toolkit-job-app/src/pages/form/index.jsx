import { useNavigate, useParams } from "react-router-dom";
import Input from "./input";
import styles from "./form.module.scss";
import { statusOptions, typeOptions } from "../../utils/constants";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { createJob, updateJob } from "../../redux/slices/jobSlice";
import { toast } from "react-toastify";

const Form = () => {
  const { mode } = useParams();
  const [editItem, setEditItem] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // oluşturma modunda: fonksiyon dursun
    if (mode === "create") return setEditItem(null);

    // güncelleme modunda: güncellenicek elemanın verilerini al
    api.get(`/jobs/${mode}`).then((res) => {
      setEditItem(res.data);
      setSelectedStatus(res.data.status);
    });
  }, [mode]);

  // form gönderilince
  const handleSubmit = (e) => {
    // sayfanın yenilenmesini engelle
    e.preventDefault();

    // formdaki verileri bir nesne içerisine kaydet
    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());

    if (!editItem) {
      // api yeni başvuru oluşturmak için istek at
      api
        .post("/jobs", jobData)
        .then((res) => {
          // reducer'a haber ver
          dispatch(createJob(res.data));
          // başvurular sayfasına yönlendirir
          navigate("/");
          // bildirim gönder
          toast.success("Yeni başvuru oluşturuldu");
        })
        .catch(() => {
          toast.error("Başvuru oluşturulamadı");
        });
    } else {
      // api'a başvuru güncellemek için istek at
      api
        .patch(`/jobs/${editItem.id}`, jobData)
        .then((res) => {
          // reducer'a haber ver
          dispatch(updateJob(res.data));
          // başvurular sayfasına yönlendirir
          navigate("/");
          // bildirim gönder
          toast.success("Başvuru Güncellendi");
        })
        .catch(() => {
          toast.error("Güncelleme başarısız");
        });
    }
  };

  // seçili status değerine göre date alanın name değeri
  const dateName =
    selectedStatus === "Mülakat" ? "interview_date" : selectedStatus === "Reddedildi" ? "rejection_date" : "date";

  // tarih alanının değerini istenilen formata getir
  const dateValue =
    editItem && new Date(editItem[dateName]).toISOString().slice(0, editItem.status === "Mülakat" ? 16 : 10);

  return (
    <div className={styles.formPage}>
      <section>
        <h2>{editItem ? "Başvuruyu Güncelle" : "Yeni Başvuru Oluştur"}</h2>

        <form onSubmit={handleSubmit}>
          <Input label="Pozisyon" name="position" value={editItem?.position} />
          <Input label="Şirket" name="company" value={editItem?.company} />
          <Input label="Lokasyon" name="location" value={editItem?.location} />
          <Input
            label="Durum"
            name="status"
            options={statusOptions}
            handleChange={(e) => setSelectedStatus(e.target.value)}
            value={editItem?.status}
          />
          <Input label="Tür" name="type" options={typeOptions} value={editItem?.type} />
          <Input
            label={
              selectedStatus === "Mülakat"
                ? "Mülakat Tarihi"
                : selectedStatus === "Reddedildi"
                ? "Reddedilme Tarihi"
                : "Başvuru Tarihi"
            }
            name={dateName}
            type={selectedStatus === "Mülakat" ? "datetime-local" : "date"}
            value={dateValue}
          />

          <div className={styles.btnWrapper}>
            <button>{editItem ? "Kaydet" : "Oluştur"}</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
