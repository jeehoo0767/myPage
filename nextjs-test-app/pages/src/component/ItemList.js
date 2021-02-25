export default function ItemList(props) {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
