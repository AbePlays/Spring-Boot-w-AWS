package com.abe.awsdemo.bucket;

public enum BucketName {

    PROFILE_IMAGE("abe-aws-demo");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
