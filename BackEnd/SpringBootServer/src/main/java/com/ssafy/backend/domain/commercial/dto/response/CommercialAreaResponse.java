package com.ssafy.backend.domain.commercial.dto.response;

public record CommercialAreaResponse(
        String commercialCode,
        String commercialCodeName,
        String commercialClassificationCode,
        String commercialClassificationCodeName,
        Double centerLat,
        Double centerLng
) {
}
