USE bigRed;

CREATE TABLE Member (
	memberGuid VARCHAR(64) PRIMARY KEY,
    firstName varchar(64),
    lastName varchar(64),
    sexAtBirth CHAR(1) DEFAULT '',
    addrStreet varchar(64),
    addrCity varchar(64),
    addrState varchar(2),
    addrZipcode INT(11),
    workPhone int(12),
    mobilePhone int(12),
    radioNumber int(20),
    stationNumber int(20),
    isActive varchar(64),
    memberPosition varchar(64)
);

CREATE TABLE Certifications (
	certificationGuid VARCHAR(64) PRIMARY KEY,
    certificationName varchar(64),
    expirationDate date default null,
    agency varchar(64)
);

CREATE TABLE Certified (
	certifiedGuid varchar(64) PRIMARY KEY,
	expirationDate date default null,
    FOREIGN KEY (certificationGuid) REFERENCES Certifications (certificationGuid),
    FOREIGN KEY (memberGuid) REFERENCES Member (memberGuid)
);

CREATE TABLE Certified (
	certifiedGuid varchar(64) PRIMARY KEY,
	expirationDate date default null,
    FOREIGN KEY (certificationGuid) REFERENCES Certifications(certificationGuid),
    FOREIGN KEY (memberGuid) REFERENCES Member(memberGuid)
);

CREATE TABLE Users (
	email varchar(64) NOT NULL,
    password varchar(64) NOT NULL,
    FOREIGN KEY (memberGuid) REFERENCES Member(memberGuid)
);
