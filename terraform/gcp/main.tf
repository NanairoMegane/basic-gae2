
locals {
  project = "sandbox-renkobayashi"
  region  = "asia-northeast1"
}

# Provider
provider "google" {
  project     = local.project
  region      = local.region
  credentials = file("../credential/account.json")
}

# Terraform
terraform {
  required_version = "~>0.12.29"
  #   backend "gcs" {
  #     bucket      = "terraform_test_0802"
  #     credentials = "../credential/account.json"
  #   }
}

# GCS
resource "google_storage_bucket" "test-bucket" {
  name          = "terraform_test_0802"
  location      = local.region
  storage_class = "REGIONAL"
  versioning {
    enabled = true
  }
}

# PubSub
## Topic
resource "google_pubsub_topic" "test-topic" {
  name = "test-topic"
}
## Subscription
resource "google_pubsub_subscription" "test-subscription" {
  name  = "test-subscription"
  topic = google_pubsub_topic.test-topic.name

  message_retention_duration = "1200s"
  retain_acked_messages      = true

  ack_deadline_seconds = 20

  expiration_policy {
    ttl = "300000.5s"
  }
}

# SA
resource "google_service_account" "sa_terraform_test" {
  account_id  = "sa-test"
  description = "test service account for terraform"
}
resource "google_service_account" "sa_terraform_test2" {
  account_id  = "sa-test2"
  description = "test service account2 for terraform"
}
resource "google_service_account" "sa_terraform_test3" {
  account_id  = "sa-test3"
  description = "test service account3 for terraform"
}

# IAM
## Member(ロール内の他のメンバーに干渉しない)
resource "google_project_iam_member" "gcs-object-viewer" {
  role   = "roles/storage.objectViewer"
  member = "serviceAccount:sa-test@sandbox-renkobayashi.iam.gserviceaccount.com"
}
resource "google_project_iam_member" "gcs-object-viewer2" {
  role   = "roles/storage.objectViewer"
  member = "serviceAccount:sa-test2@sandbox-renkobayashi.iam.gserviceaccount.com"
}
resource "google_project_iam_member" "gcs-object-viewer2-b" {
  for_each = toset([
    "roles/storage.objectViewer",
    "roles/monitoring.viewer"
  ])
  role = each.value
  member = "serviceAccount:sa-test2@sandbox-renkobayashi.iam.gserviceaccount.com"
}

## Binding(ロール内の他のメンバーに干渉する)
# resource "google_project_iam_binding" "gcs-object-viewer-with-B" {
#   role = "roles/storage.objectViewer"
#   members = [
#     "serviceAccount:sa-test3@sandbox-renkobayashi.iam.gserviceaccount.com"
#   ]
# }
