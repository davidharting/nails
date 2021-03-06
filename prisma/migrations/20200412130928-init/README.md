# Migration `20200412130928-init`

This migration has been generated by David Harting at 4/12/2020, 1:09:28 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
    "email" text  NOT NULL ,
    "firstName" text   ,
    "id" SERIAL,
    "lastName" text   ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."List" (
    "createdBy" integer  NOT NULL ,
    "id" SERIAL,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Task" (
    "completedAt" timestamp(3)  NOT NULL ,
    "description" text  NOT NULL ,
    "id" SERIAL,
    "listId" integer  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")

ALTER TABLE "public"."List" ADD FOREIGN KEY ("createdBy")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Task" ADD FOREIGN KEY ("listId")REFERENCES "public"."List"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200412130928-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,30 @@
+datasource db {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id        Int     @default(autoincrement()) @id
+  email     String  @unique
+  firstName String?
+  lastName  String?
+}
+
+model List {
+  id        Int    @default(autoincrement()) @id
+  creator   User   @relation(fields: [createdBy], references: [id])
+  createdBy Int
+  tasks     Task[]
+}
+
+model Task {
+  id          Int      @default(autoincrement()) @id
+  description String
+  completedAt DateTime
+  list        List     @relation(fields: [listId], references: [id])
+  listId      Int
+}
```


