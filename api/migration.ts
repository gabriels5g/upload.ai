function Migration() {

  const createTable = `
  CREATE TABLE videos (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    path VARCHAR(255) NOT NULL,
    transcription VARCHAR(255),
    PRIMARY KEY (id)
);
`


}