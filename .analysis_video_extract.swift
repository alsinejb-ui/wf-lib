import Foundation
import AVFoundation
import CoreGraphics
import ImageIO
import UniformTypeIdentifiers

let input = URL(fileURLWithPath: "/Users/alsine_bourdette/Library/Caches/com.apple.SwiftUI.Drag-6E369B57-358F-41AB-91C8-3FC6D5C0A94A/Enregistrement de l’écran 2026-03-26 à 14.53.15.mov")
let outDir = URL(fileURLWithPath: "/Users/alsine_bourdette/wf-lib/.analysis_video", isDirectory: true)
try? FileManager.default.createDirectory(at: outDir, withIntermediateDirectories: true)

let asset = AVURLAsset(url: input)
let durationSec = CMTimeGetSeconds(asset.duration)
let generator = AVAssetImageGenerator(asset: asset)
generator.appliesPreferredTrackTransform = true

guard durationSec.isFinite, durationSec > 0 else {
    print("Invalid duration")
    exit(1)
}

let points: [Double] = [0.0, durationSec*0.2, durationSec*0.4, durationSec*0.6, durationSec*0.8, max(0,durationSec-0.05)]

for (i,t) in points.enumerated() {
    let time = CMTime(seconds: t, preferredTimescale: 600)
    do {
        let img = try generator.copyCGImage(at: time, actualTime: nil)
        let destURL = outDir.appendingPathComponent(String(format:"frame_%02d_%.2f.jpg", i, t))
        guard let dest = CGImageDestinationCreateWithURL(destURL as CFURL, UTType.jpeg.identifier as CFString, 1, nil) else {
            print("Cannot create destination")
            continue
        }
        CGImageDestinationAddImage(dest, img, [kCGImageDestinationLossyCompressionQuality: 0.9] as CFDictionary)
        if CGImageDestinationFinalize(dest) {
            print(destURL.path)
        } else {
            print("Failed writing \(destURL.path)")
        }
    } catch {
        print("Frame error at \(t): \(error)")
    }
}
print("duration=\(durationSec)")
