-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `siape` VARCHAR(7) NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NULL,
    `permissionToLeaveEarly` BOOLEAN NOT NULL,
    `permissionToEnterOnOtherShift` BOOLEAN NOT NULL,
    `onSchool` BOOLEAN NOT NULL,
    `shift` VARCHAR(191) NOT NULL,
    `qrCode` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_cpf_key`(`cpf`),
    UNIQUE INDEX `Users_siape_key`(`siape`),
    UNIQUE INDEX `Users_email_key`(`email`),
    UNIQUE INDEX `Users_qrCode_key`(`qrCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EarlyExits` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `start` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `end` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Logs` ADD CONSTRAINT `Logs_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EarlyExits` ADD CONSTRAINT `EarlyExits_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
