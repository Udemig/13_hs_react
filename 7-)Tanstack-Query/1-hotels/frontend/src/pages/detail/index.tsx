import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { usePlace } from "../../service";
import Loading from "../../components/loading";
import Error from "../../components/error";
import Container from "../../components/detail/container";
import Images from "../../components/detail/images";
import Info from "../../components/detail/info";
import Button from "../../components/detail/button";

const DetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, refetch } = usePlace(id);

  if (isLoading)
    return (
      <Container>
        <Loading />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error info={error.message} refetch={refetch} />
      </Container>
    );

  if (!data) return null;

  return (
    <Container>
      <Images image={data.image_url} />
      <Info place={data} />
      <Button id={String(data.id)} />
    </Container>
  );
};

export default DetailPage;
